
import React from 'react';

export default class Search extends React.Component{

    constructor(props){

        super(props);

        if (props.match.params && props.match.params.searchquery){

            this.state = {
                query : props.match.params.searchquery,
                block : null,
                transaction : null,
                balance : null
            };

            this._linkClient = this.props.linkClient;

            // Search query has been defined as part of the url. Do search.
            this.doSearch()
        }

    }

    doSearch(){

        try{

            const searchResults = this._linkClient.doSearch();
            const state = Object.assign(this.state, searchResults);
            this.setState(state);

            console.log(state);

        }catch(err){

            alert('Sorry but there was an error with this request: ' + err.message);

        }


    }

    render(){

        return(

            <div className="search-page content-page">

                This is the search page

            </div>

        )

    }

}