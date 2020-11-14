let textStyle = {
    textDecoration: 'line-through',
    color:'grey',
    fontWeight:'bold',
    fontSize:'20px',
    display:'inline'
};
let textNoStyle = {
    textDecoration : 'none',
    color:'grey',
    fontWeight:'bold',
    fontSize:'20px',
    display:'inline'
};
let liStyle = {
    //border:'1px solid black',
    borderRadius: 45,
    padding:5,
    margin:5,
    listStyle:'none',
    height:45,
    background: 'rgb(255, 237, 204)'

    
};
let radioStyle = {
    margin:10,
    float:'left'
};
let divStyle = {
    margin:'5px auto',
   // background:'rgba(125,0,255,0.9)',
    borderRadius: 15,
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'center',
    
};
let ulStyle = {
    display:'flex',
    flexDirection:'column',
    //border:'1px solid black',
    minWidth:'60%',
    flexGrow: 1,
    

};
let inputStyle = {
    width:'35em',
    height:'35px',
    background:'rgb(222, 184, 225)',
    border: '2px solid rgb(255, 237, 204)',
    borderRadius: '20px',
    margin:'70px 5px 70px 0px',
    color:'grey',
    
};
let buttonStyle = {
    width:'46px',
    height:'46px',
    marginLeft:'5px',
    background: 'rgb(255, 237, 204)',
    border:'0px solid black',
    borderRadius: '50%',
    marginTop:70
};
let deleteButtonStyle = {
    margin:10,
    float:'right',
    borderRadius:10,
    border:'2px solid grey',
    color:'grey'
};
export let styles = {
    textStyles:textStyle,
    textNoStyles:textNoStyle,
    liStyles:liStyle,
    radioStyles:radioStyle,
    divStyles:divStyle,
    ulStyles:ulStyle,
    buttonStyles:buttonStyle,
    inputStyles:inputStyle,
    deleteButtonStyles:deleteButtonStyle
} ;