import React from 'react';
import {Route} from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({match}) => (
    <div className="shop-page">
        <Route component={CollectionsOverview} exact path={`${match.path}`} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </div>
)



export default ShopPage;