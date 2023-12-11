import DirectoryComponent from "../../components/directory/DirectoryComponent";

const HomeComponent = () => {

  const categories = [
    {
      "id": 1,
      "title": "yarns",
      "imageUrl": "https://i0.wp.com/blog.treasurie.com/wp-content/uploads/2021/04/types-of-yarn-3.jpg"
    },
    {
      "id": 2,
      "title": "hooks",
      "imageUrl": "https://images.immediate.co.uk/production/volatile/sites/32/2022/02/guide-to-crochet-hook-sizes-f6bed43.jpg?quality=90&resize=980,654"
    },
    {
      "id": 3,
      "title": "patterns",
      "imageUrl": "https://1.bp.blogspot.com/-xKSznH6ylZM/YIdJ9lbGnWI/AAAAAAAANzI/TVBUse3Z7X8XKPwQLUfGAvJN6a6S-P8uQCLcBGAsYHQ/s750/clothes%2Band%2Baccessories.jpg"
    },
    {
      "id": 4,
      "title": "classes",
      "imageUrl": "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_863/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/ynm5jo60yzut4nxaghja/HandCrochetOnlineWorkshop.webp"
    },
    {
      "id": 5,
      "title": "crochet products",
      "imageUrl": "https://kidshaven.sg/cdn/shop/products/Family_7b536d30-f76a-4d7b-8386-c43ab99a71f5.jpg?v=1691070564"
    }
  ]

  return (
    <DirectoryComponent categories={categories}/>
  );
}

export default HomeComponent; 