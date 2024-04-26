import { useContext } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import {useNavigate, useLocation} from 'react-router-dom'
import { AuthContext } from "./AuthProvider";

const SocialLogin = () => {
    const { googleLogin, githubLogin } = useContext(AuthContext)
    
    const navigate = useNavigate();
    const location = useLocation()
    const from = location?.state || '/'


    const handleSocialLogin = socialProvider => {
        socialProvider()
        .then(result=>{
            if (result.user) {
                navigate(from)
            }
        })
    }
    return (
        <>
            <div className="divider">Social Logins</div>
            <div>
                <div className="flex justify-around mb-4">
                    <div>
                        <button
                            onClick={() => handleSocialLogin(googleLogin)}
                            className="btn">
                            <FaGoogle></FaGoogle>
                            Google
                        </button>
                    </div>
                    <div>
                        <button
                        onClick={()=>handleSocialLogin(githubLogin)}
                         className="btn">
                            <FaGithub></FaGithub>
                            Github
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SocialLogin;