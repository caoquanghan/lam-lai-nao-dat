// import { Scenario } from './../../Services/scenario/index';
// import { Schedule } from '../../Services/schedule/index';
// import { FarmListJson } from "@/Config";
// import { Farm } from "@/Services";
// import { createSlice } from "@reduxjs/toolkit";
// import { v4 } from "uuid";
// const farmSlice = createSlice({
//   name: "farmlist",
//   initialState: { 
//     Scenariolist: [{}
//       // {
//       //   id: "",
//       //   name: "",
//       //   date: "",
//       //   model: {
//       //     id: "",
//       //     name: ""
//       //   },
//       //   plant: "",
//       //   location: "",
//       //   sche: [
//       //     {
//       //       id: "",
//       //       waterHour: "",
//       //       waterTime: "",
//       //       water: ""
//       //     },
//       //   ]
//       // }
//     ],
//     inputTime: "",
//     inputDuration: "",
//     inputAmount: "",
//     inputAcraege: "",
//     selectedScenario: {}
//   },
//   reducers: {
//     // setUser: (state, action) => {
//     //   state.user = action.payload;
//     // },
//     // getSelectedModelId: (state, action) => {
//     // const idxTask = state.farmlist.findIndex(
//     //   (task) => task.id == state.selectedFarm.id);
//     //   if (state.farmlist[idxTask].model)
//     //     {state.curActiveModeId = state.farmlist[idxTask].model.id;}
//     // },
//     // setModel: (state, action) => {
//     //   const idxTask = state.farmlist.findIndex(
//     //     (task) => task.id == state.selectedFarm.id);
//     //   state.farmlist[idxTask].model = action.payload;
//     //   state.curActiveModeId  = action.payload.id;
//     // },
//     getScenarioList: (state, action) => {
//       action.payload.map((task)=> {
//         if(task.farmId) {
//           console.log(task.user.id);
//           if(task.user.id === state.user && state.farmlist.findIndex((farm)=> farm.id === task.id) === -1){
//             state.farmlist.push(task);  
//           }
//         }
//       });
//     },
//     deleteFarmList: (state, action) => {
//       state.farmlist = [];
//     },
//     addFarm: (state, action) => {
//         const newFarm = action.payload
//         state.farmlist.push(newFarm);
//         state.inputFarmName= "";
//         state.inputPlant= "";
//         state.inputLocation= "";
//         state.inputAcraege= "";
//     },
//     clickFarm: (state, action) => {
//       const idxTask = state.farmlist.findIndex(
//         (task) => task.id == action.payload
//       );
//       state.selectedFarm = state.farmlist[idxTask];
//     },
//     updateInputFarmName: (state, action) => {
//       state.inputFarmName = action.payload;
//     },
//     updateInputPlant: (state, action) => {
//       state.inputPlant = action.payload;
//     },
//     updateInputLocation: (state, action) => {
//       state.inputLocation = action.payload;
//     },
//     updateInputAcraege: (state, action) => {
//       state.inputAcraege = action.payload;
//     },
//     updateModel: (state, action) => {
//       const idxTask = state.farmlist.findIndex(
//         (task) => task.id == state.selectedFarm.id
//       );
//       state.farmlist[idxTask].model= action.payload;
//       state.selectedFarm.model = action.payload;
//     },
//     // addSchedule: (state, action) =>{
//     //   const idxTask = state.farmlist.findIndex(
//     //     (task) => task.id == state.selectedFarm
//     //   );
//     //   state.farmlist[idxTask].sche.push(action.payload);
//     //   state.selectedFarm.sche.push( action.payload);
//     // },
//     setCurSche:(state, action)=>{
//       state.curSchedule = action.payload;
//     },
//     deleteSchedule: (state)=>{
//       const idxSche = state.farmSchedule.findIndex(
//         (task) => task.id === state.curSchedule
//       );
//       state.farmSchedule.splice(idxSche, 1);
//     },
//     getSchedule: (state, action)=>{
//       state.farmSchedule = action.payload.filter((task)=> task.farmid === state.selectedFarm);
//     },

//     deleteFarm: (state, action) => {
//       const idxTask = state.farmlist.findIndex(
//         (task) => task.id == state.selectedFarm.id
//       );
//       state.farmlist.splice(idxTask, 1);
//       state.selectedFarm = {};
//       state.inputFarmName= "";
//       state.inputPlant= "";
//       state.inputLocation= "";
//       state.inputAcraege= "";
//     }
//   },
// });

// // export const { addFarm, clickFarm, updateInputAcraege, updateInputFarmName, updateInputLocation, updateInputPlant, updateModel, addSchedule, setCurSche, deleteSchedule, deleteFarm } = farmSlice.actions;
// export const {
//   // getSelectedModelId,setModel, 
//   setUser, updateFarmList, addFarm, clickFarm, updateInputAcraege, updateInputFarmName, updateInputLocation, updateInputPlant, updateModel, setCurSche, getSchedule, deleteSchedule, deleteFarm } = farmSlice.actions;
// export const farmReducers = farmSlice.reducer;
