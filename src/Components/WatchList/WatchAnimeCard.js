import { RemoveButton, WatchItemContainer, WatchItemDetails } from "../../Styled";

const WatchAnimeCard = ({ item, deleteAnimeCard }) => {
    
    return (
        <WatchItemContainer>
            <img src={item.images.jpg.small_image_url} style={{ width: "30%", height: "70px" }} alt="img" />
            <WatchItemDetails>
                <div className="">
                    <p style={{ margin: "4px 0", fontWeight: "500" }}>{item.title}</p>
                    <p style={{
                        margin: "4px 0",
                        lineHeight: 'normal',
                        display: 'inline-block',
                        color: '#fff',
                        padding: '2px 4px 2px 6px',
                        borderRadius: '3px',
                        fontWeight: '500',
                        fontSize: '10px',
                        backgroundColor: '#388e3c',
                        width: '34px'
                    }}>
                        {item.rank}</p>
                </div>
                <RemoveButton onClick={() => deleteAnimeCard(item.mal_id)}>Remove</RemoveButton>
            </WatchItemDetails>
        </WatchItemContainer>
    )

}
export default WatchAnimeCard;