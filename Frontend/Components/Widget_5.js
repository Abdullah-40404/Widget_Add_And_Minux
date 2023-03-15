import { useState } from "react";

const Widget_Display5=() => {
    

    const style1 = {
        height: '100%',
        width: '100%',
        objectFit: 'contain'
      };
    
      const style2 = {
        height: '50%',
        width: '50%',
      };
    
    
      const [arr_to_map, setItems] = useState([]);
      var lenght = arr_to_map.length;
    
      const removeSecond = () => {
        setItems(arr_to_map =>
          arr_to_map.filter(arr_to_map => {
            return arr_to_map.id !== lenght;
          }),
        );
      };
      
      

      const AddSecond = () => {
        setItems(arr_to_map.concat({ id: lenght + 1, name: <img style={style1} src={require('./Images/Widget_5.png')}/> }));
      };
      

      
      return (
        <>

          <ul>
            <li>
              <div className='one_three'>
                <img style={style1}  src={require('./Images/Widget_5.png')} />
              </div>
            </li>
    
            <li>
              <div className='one_four'>
                <ol>
                  <li>
                    <img style={style2} src={require('./Images/Plus.png')} onClick={AddSecond} />
                  </li>
                  <li>
                    <img style={style2} src={require('./Images/Minus.png')} onClick={removeSecond} />
                  </li>
                </ol>
              </div>
            </li>
            <li>
              <div className='one_five'>
                <ul>
                  {arr_to_map.map(({ name }) => {
                    return (
                      <li>
                        {name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>   
          </ul>
    
        </>
    
      );
};

export default Widget_Display5;
