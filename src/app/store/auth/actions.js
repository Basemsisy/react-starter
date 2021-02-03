export const LOGIN = "LOGIN";
export const login = () => ({
  type: LOGIN,
  request: {
    url: "users",
  },
});
