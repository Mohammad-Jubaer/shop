import React from "react";

import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collectionpreview/collection-preview.component";
class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...others }) => (
          <CollectionPreview key={id} {...others} />
        ))}
      </div>
    );
  }
}
export default Shop;
