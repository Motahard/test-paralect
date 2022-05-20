export const getUserURL = (userName) => `https://api.github.com/users/${userName}`;

export const getReposURL = (userName, page) => `https://api.github.com/users/${userName}/repos?page=${page}`;