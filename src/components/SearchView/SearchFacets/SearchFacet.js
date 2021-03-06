import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    getDataSearchResults,
    getDocumentSearchResults,
    setFacetValue
} from '../../../actions/appAction';
import urlBuilder from '../../../utils/urlBuilder';

class SearchFacet extends Component {
    componentDidMount() {
    }

    handleFacetClick = (e) => {
        let facetValue = e.currentTarget.getAttribute('data-value');
        let facetTitle = e.currentTarget.getAttribute('data-title');

        this.props.dispatchSetFacetValue({
            value: facetValue,
            title: facetTitle
        });

        let values = {
            input: this.props.appReducer.searchInput,
            start: 0,
            rows: this.props.appReducer.rows,
            facets: this.props.appReducer.facets
        }

        if(this.props.appReducer.dataType === "data"){
            this.props.dispatchGetDataSearchResults(values);
        }

        this.props.history.push({
            pathname: '/',
            search: "?" + urlBuilder(this.props.appReducer, {start: 0})
        });
    }

    render() {
        return (
            <div className="searchFacet">
                <span
                    className="searchFacetTitle"
                    data-value={this.props.value}
                    data-title={this.props.title}
                    onClick={this.handleFacetClick}
                >
                    {this.props.value}
                </span>
                <span className="searchFacetDescription"> {this.props.count}</span>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    dispatchGetDataSearchResults: (input) => dispatch(getDataSearchResults(input)),
    dispatchGetDocumentSearchResults: (input) => dispatch(getDocumentSearchResults(input)),
    dispatchSetFacetValue: (input) => dispatch(setFacetValue(input))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchFacet);