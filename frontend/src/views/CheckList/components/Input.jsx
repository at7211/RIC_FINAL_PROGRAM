// import React,{Component} from 'react';
// // import fakeData from "../CheckList"

// class Todo extends Component{

//   constructor(props) {
//     super(props);
//     // this.state = { 
//     //   isClicked: false,
//     index : 0
//     };
//   }

//   // Click =(id) =>{
//   //   console.log("Click",id,this.state);
//   //   const change = this.state;;
//   //   console.log(change)
    
//   //   // this.setState(
//   //   //   {
//   //   //       isClicked : change,
//   //   //   }
//   //   // )
      
//   //   console.log("AfterClick",id,this.state);

//   //   this.props.Reorder(id)
//   // }

//   // onCLick = (id) => {
//   //   const index = selectedJudges.indexOf(id);
  
//   //   return (
//   //     <ListCheckbox
//   //       onClick={() => (~index ? (
//   //         this.setState({
//   //           selectedJudges: [
//   //             ...selectedJudges.slice(0, index),
//   //             ...selectedJudges.slice(index + 1),
//   //           ],
//   //         })
//   //       ) : this.setState({
//   //         selectedJudges: [
//   //           ...selectedJudges,
//   //           id,
//   //         ],
//   //       }))}
//   //       checked={!!~index} />
//   //   );
//   // }








  
//   render() 

//   const {id,text,isClicked} = this.props;
//   // console.log(this.props.fakeData)
//   let fakeData = this.props.fakeData
//   // this = fakeData.indexOf(id);

//   return(
//     <>
//       { 
//         <li className="todo-app__item">
//           <div className="todo-app__checkbox">
//             <input type="checkbox" id={id} 

//               // onClick={() => (~index ? (
//               //   this.setState({
//               //     fakeData: [
//               //       ...fakeData.slice(0, index),
//               //       ...fakeData.slice(index + 1),
//               //     ],
//               //   })
//               // ) : this.setState({
//               //   fakeData: [
//               //     ...fakeData,
//               //     id,
//               //   ],
//               // }))}
//               // checked={!!~index} 
//               />

//             {/* <input type="checkbox" id={id} onClick={()=>this.Click(id)} /> */}
//             <label for={id}> index = {index}</label>
//           </div>
          
//           <p className="todo-app__detail">{text}</p>
//         </li> 
//       }
//     </>
//   )
// };


// // export default Todo;
