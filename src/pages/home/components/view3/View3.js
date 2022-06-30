import React from "react";
import {
  View3Container,
  View3H1,
  View3Wrapper,
  View3Card,
  View3Icon,
  View3H2,
  View3P,
} from "./View3Elements";
import Icon1 from "./Icon1.png";
import Icon2 from "./Icon2.png";
import Icon3 from "./Icon3.png";
import Icon4 from "./Icon4.png";
const View3 = () => {
  return (
    <View3Container id="View3">
      <View3H1>How will you benefit from IEEE INSL?</View3H1>
      <View3Wrapper>
        <View3Card>
          <View3Icon src={Icon1} />
          <View3H2>A Platform for Growth</View3H2>
          <View3P>
            it is a nattorm where creativitv meets lis marketolace, were vouna
            minas dento know their opponunies and unite to learn, innovate, and
            grow asahis a nattorm where creativitv meets lis marketolace
          </View3P>
        </View3Card>
        <View3Card>
          <View3Icon src={Icon2} />
          <View3H2>Get Connected</View3H2>
          <View3P>
            it is a nattorm where creativitv meets lis marketolace, were vouna
            minas dento know their opponunies and unite to learn, innovate, and
            grow asahis a nattorm where creativitv meets lis marketolace
          </View3P>
        </View3Card>
        <View3Card>
          <View3Icon src={Icon3} />
          <View3H2>Entepreneurial Skills</View3H2>
          <View3P>
            it is a nattorm where creativitv meets lis marketolace, were vouna
            minas dento know their opponunies and unite to learn, innovate, and
            grow asahis a nattorm where creativitv meets lis marketolace
          </View3P>
        </View3Card>
        <View3Card>
          <View3Icon src={Icon4} />
          <View3H2>Way to the Industry</View3H2>
          <View3P>
            it is a nattorm where creativitv meets lis marketolace, were vouna
            minas dento know their opponunies and unite to learn, innovate, and
            grow asahis a nattorm where creativitv meets lis marketolace
          </View3P>
        </View3Card>
      </View3Wrapper>
    </View3Container>
  );
};

export default View3;
