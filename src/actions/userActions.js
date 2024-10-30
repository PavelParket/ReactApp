export const SIGNIN = "SIGNIN";
export const SIGNOUT = "SIGNOUT";

export const signin = (username) => ({
   type: SIGNIN,
   payload: username,
});

export const signout = () => ({
   type: SIGNOUT,
});