import { RemoveButton, WatchItemContainer, WatchItemDetails } from "../../Styled";

const WatchAnimeCard = ({ item, deleteAnimeCard }) => {

    return (
        <WatchItemContainer>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <img src={item.images.jpg.small_image_url} style={{ width: "100%", height: "70px" }} alt="img" />
                <p className="watchListCardRank"> {item.rank} </p>
            </div>
            <WatchItemDetails>
                <div style={{ textAlign: 'left' }}>
                    <p style={{ margin: "4px 0", fontSize: '14px', }}>{item.title}</p>

                </div>
                <div style={{ marginTop: '20px', textAlign: 'left' }}>
                    <RemoveButton onClick={() => deleteAnimeCard(item.mal_id)}>Remove</RemoveButton>
                </div>
            </WatchItemDetails>
        </WatchItemContainer>
    )

}
export default WatchAnimeCard;