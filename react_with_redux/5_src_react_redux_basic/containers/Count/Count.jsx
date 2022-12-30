//  import UI component
import CountUI from "../../components/Count/Count";
//  import connect
import {connect} from 'react-redux';
import {createAsyncIncrementAction, createDecrementAction, createIncrementAction} from "../../redux/count_action";

// the return value(object) will be passed to UI component as state in props
function mapStateToProps(state) {

    return {count:state}
}

// the return value and will be passed to UI component as action in props
function mapDispatchToProps(dispatch){

    return {
        increment:(data)=>dispatch(createIncrementAction(data)),
        decrement:(data)=>dispatch(createDecrementAction(data)),
        incrementAsync:(data,time)=>dispatch(createAsyncIncrementAction(data,time))
        }
}

// create a container
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)
