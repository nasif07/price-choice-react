
const Link = (route) => {
    return (
        <li className="mr-10 hover:bg-yellow-500 px-6">
            <a href={route.route.path}>{route.route.name}</a>
        </li>
    );
};
// Link.proptypes = 

export default Link;