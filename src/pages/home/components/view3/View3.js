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
            It is a platform where creativity meets its marketplace, where young
            minds get to know their opportunities and unite to learn, innovate,
            and grow as one.
          </View3P>
        </View3Card>
        <View3Card>
          <View3Icon src={Icon2} />
          <View3H2>Get Connected</View3H2>
          <View3P>
            IEEE Innovation Nation will Integrate students, industry
            professionals, and academia into a collaborative space that
            celebrates the opportunities created by tech entrepreneurship.
          </View3P>
        </View3Card>
        <View3Card>
          <View3Icon src={Icon3} />
          <View3H2>Entepreneurial Skills</View3H2>
          <View3P>
            It will provide comprehensive training focused on design thinking,
            market analysis, financial projections, business models, soft skill
            development, company law, technical aspects relevant to the selected
            project ideas, etc.
          </View3P>
        </View3Card>
        <View3Card>
          <View3Icon src={Icon4} />
          <View3H2>Way to the Industry</View3H2>
          <View3P>
            The judges of the finale may double as investors, and guide the
            teams to become noteworthy start-ups and successful entrepreneurs of
            the future.
          </View3P>
        </View3Card>
      </View3Wrapper>
    </View3Container>
  );
};

export default View3;
