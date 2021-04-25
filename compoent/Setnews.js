
import React from 'react';
import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions ,
  
} from 'react-native';
import HTMLView from 'react-native-htmlview';

import HTML from "react-native-render-html";
import getRNDraftJSBlocks from 'react-native-draftjs-render';


const styles = StyleSheet.flatten({
  paragraph: {
    color: 'pink',
    fontSize: 18,
  },
  link: {
    color: 'blue',
    fontWeight: 'bold',
  },
});
const htmlContent = `<p><a href="http://jsdf.co">&hearts; nice job!</a></p>`;
const Setnews = ({data}) => {
    const contentWidth = useWindowDimensions().width;
   
   
    // const htmlContent = data.__html
    // const    contentState = data
    // // const blocks = getRNDraftJSBlocks({ data });
    // const blocks =  getRNDraftJSBlocks({ contentState })
    // console.log(blocks)
    //   const blocks = getRNDraftJSBlocks({ data, customStyles: styles });
  return (
    <ScrollView style={{ flex: 1 }}>

<HTMLView
        value={htmlContent}
        stylesheet={styles}
      />
    <HTML source={{ html: htmlContent }} contentWidth={contentWidth} />
  </ScrollView>
  );
};

export default Setnews
