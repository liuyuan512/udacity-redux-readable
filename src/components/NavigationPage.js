import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getFetchCategories } from '../actions'
import * as Status from '../status'


class NavigationPage extends Component{

    componentDidMount(){
        const {getAllCategories} = this.props
        getAllCategories()
    }

    render(){
        const { status,categories } = this.props


        switch(status){
            case Status.LODAING:
                return <div>
                            <Link to='/'> HomeView-----------=</Link>
                            <Link to='/create'> CreatePost-----</Link>
                            Catories are loading
                        </div>
            case Status.SUCCESS:
                return <div>
                            <Link to='/'> HomeView-----------=</Link>
                            <Link to='/create'> CreatePost-----</Link>
                            {categories.map(category => <Link
                                                         to={`/${category.path}`}
                                                         key={category.name}>{category.name}-----</Link>)}
                        </div>
            case Status.FAILURE:
                return <div>
                            <Link to='/'> HomeView-----------=</Link>
                            <Link to='/create'> CreatePost-----</Link>
                            categories information from server loads fails
                        </div>
            default:
                throw new Error('unexpected status' + status)
        }
    }
}

const mapDispatchToProps = (dispatch) =>({
    getAllCategories: ()=>dispatch(getFetchCategories())

})

const mapStateToProps = (state) =>({
    status:state.categories.status,
    categories:state.categories.categories
})

export default connect(mapStateToProps,mapDispatchToProps)(NavigationPage)

//