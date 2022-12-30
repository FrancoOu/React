//  import UI component
import CountUI from "../../components/Count/Count";
//  import connect
import {connect} from 'react-redux';
import {createAsyncIncrementAction, createDecrementAction, createIncrementAction} from "../../redux/count_action";

// the return value(object) will be passed to UI component as state in props
const mapStateToProps = state => ({count:state})

// the return value and will be passed to UI component as action in props
// const mapDispatchToProps = dispatch =>(
//     {
//         increment:(data)=>dispatch(createIncrementAction(data)),
//         decrement:(data)=>dispatch(createDecrementAction(data)),
//         incrementAsync:(data,time)=>dispatch(createAsyncIncrementAction(data,time))
//         }
// )


const mapDispatchToProps = {

    increment:createIncrementAction,
    decrement:createDecrementAction,
    incrementAsync:createAsyncIncrementAction

}
// create a container
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)
