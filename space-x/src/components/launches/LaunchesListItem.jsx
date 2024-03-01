import {Card} from "../../styledComponents/GlobalStyles";

const LaunchesListItem = ({launch}) => {
    return <Card>
        <h3>{launch.name}</h3>
        <img src={launch.links.patch.small} alt={launch.name} />
        <p>{launch.details}</p>
    </Card>
}

export default LaunchesListItem;