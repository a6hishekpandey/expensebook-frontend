import { Button } from "./index.js";
import AuthService from "../services/auth.js";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { logout as sliceLogout } from "../store/authSlice.js";
import { useDispatch, useSelector } from "react-redux";

function Profile() {
    const authService = new AuthService();
    const dispath = useDispatch();
    const navigate = useNavigate();
    const redirectPath = useSelector((state) => state.authReducer.redirectPath);

    const logout = async () => {
        const response = await authService.logout();
        if (response.success) {
            Cookies.remove("accessToken");
            Cookies.remove("refreshToken");
            dispath(sliceLogout());
            navigate("/");
        }
    };

    return (
        <div className="w-full h-[100svh] flex justify-center items-center text-white">
            <Button
                className="text-sm bg-[#7c5df9] h-[2.5rem] rounded-[0.1875rem] z-[1000] w-40"
                type="button"
                onClick={logout}
            >
                Logout
            </Button>
        </div>
    );
}

export default Profile;
