import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import Todo from './components/Input';
import { isCatchClause } from "@babel/types";

let fakeData = [{
  id: "anfsdjfnasf",
  link: 'https://i0.wp.com/cep.ntu.edu.tw/wp-content/uploads/2019/06/創12審核正式-01.png?fit=1024%2C724&ssl=1',
  describe: '創12錄取名單',
  index:0,
  isClicked:false
}, {
  id: "dsjasdf",
  link: 'https://i2.wp.com/cep.ntu.edu.tw/wp-content/uploads/2019/04/活動通說明會_gif.gif?fit=1080%2C540&ssl=1',
  describe: '2019創創週《創闖看!》系列活動',
  index:0,
  isClicked:false
  
}, {
  id: "csafnjsanjas",
  link: 'https://i2.wp.com/cep.ntu.edu.tw/wp-content/uploads/2019/04/活動通說明會_gif.gif?fit=1080%2C540&ssl=1',
  describe: '第三個活動',
  index:0,
  isClicked:false
  
}, {
  id: "dsnjswq",
  link: 'https://i2.wp.com/cep.ntu.edu.tw/wp-content/uploads/2019/04/活動通說明會_gif.gif?fit=1080%2C540&ssl=1',
  describe: '第四個活動',
  index:0,
  isClicked:false
  
}]

// const newArray = [0, 3,6,8]

// onClick={if(clicked){
//   return [
//     ...newArray.slice(0, index),
//     ...new
//     ...newArray.slice(index+ 1) ,
//   ] else {
//     ...newArray,
//   }
// }}


// {(id) => {
//   const index = selectedJudges.indexOf(id);

//   return (
//     <ListCheckbox
//       onClick={() => (~index ? (
//         this.setState({
//           selectedJudges: [
//             ...selectedJudges.slice(0, index),
//             ...selectedJudges.slice(index + 1),
//           ],
//         })
//       ) : this.setState({
//         selectedJudges: [
//           ...selectedJudges,
//           id,
//         ],
//       }))}
//       checked={!!~index} />
//   );
// }}

class CheckList extends React.Component {

  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      num : 0,
    };
  }
  
  // Reorder = (id) => {
    
  //   console.log("Reorder");
  //   // console.log("reoder-click",id,this.state.num);
  //   this.setState(
  //     {
  //         num : this.state.num += 1
  //     }
  //   )


  //   if (fakeData[0] === id){
  //     // fakeData.index = this.state.num
  //     // console.log("fake起來")
  //   }

  //   // console.log("after click",id,this.state.num);
  //   // 根據index重新排序
  //   // console.log(fakeData,"first")

  //   fakeData = fakeData.sort(function (a, b) {
  //     return a.index> b.index ? 1 : -1;
  //   });

  //   // console.log(fakeData)

  // }



 
  render() {
    const { classes} = this.props;

    return (
      <div>
        <ul class="todo-app__list" id="todo-list">
                      
          { fakeData.map( todos=>(
                <Todo
                    // fakdata = {fakedata}
                    // key = {todos.id}
                    id = {todos.id}
                    text = {todos.describe}
                    index = {todos.index}
                    Reorder = {this.Reorder}
                />
              )
            )
          }         
        </ul>
        {/* const change = this.props.isClicked; */}

      </div>
    );
  }
}

CheckList.propTypes = {
  classes: PropTypes.object
};

export default {CheckList,fakeData};
