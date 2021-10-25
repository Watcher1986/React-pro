import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const User = () => {
    const [userData, setUserData] = useState(null)
    const { userId } = useParams()

    useEffect(() => {
      fetch(`https://api.github.com/users/${userId}`)
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          throw new Error();
        })
        .then(userData => {
          setUserData(userData);
        });
    }, [userId]);

    if (!userData) {
      return null;
    }
    const { name, location, avatar_url } = userData;
    return (
      <div className="user">
        <img src={avatar_url} alt="User Avatar" className="user__avatar" />
        <div className="user__info">
          <span className="user__info">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
}

export default User;


// class User extends Component {
//   state = {
//     userData: null,
//   };

//   componentDidMount() {
//     this.fetchUserData();
//   }

//   componentDidUpdate(prevProps) {
//     const prevUser = prevProps.match.params.userId;
//     const curentUser = this.props.match.params.userId;

//     if (prevUser !== curentUser) {
//       this.fetchUserData();
//     }
//   }

//   fetchUserData() {
//     const { match } = this.props;
//     fetch(`https://api.github.com/users/${match.params.userId}`)
//       .then(res => {
//         if (res.ok) {
//           return res.json();
//         }
//         throw new Error();
//       })
//       .then(userData => {
//         this.setState({
//           userData,
//         });
//       });
//   }

//   render() {
//     const { userData } = this.state;
//     if (!userData) {
//       return null;
//     }
//     const { name, location, avatar_url } = userData;
//     return (
//       <div className="user">
//         <img src={avatar_url} alt="User Avatar" className="user__avatar" />
//         <div className="user__info">
//           <span className="user__info">{name}</span>
//           <span className="user__location">{location}</span>
//         </div>
//       </div>
//     );
//   }
// }