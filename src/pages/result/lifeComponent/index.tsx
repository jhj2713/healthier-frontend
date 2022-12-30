import { ILifeComponent } from "src/interfaces/resultPage";
import Description from "../description";
import { Background, Contents } from "./index.style";

const LifeComponent = ({ idx, icon, title, content }: ILifeComponent) => {
  return (
    <Background idx={idx}>
      <section className="icon">
        <img alt="icon" src={icon} width={23} height={23} />
      </section>
      <Contents>
        <section className="title">{title}</section>
        <Description text={content} />
      </Contents>
    </Background>
  );
};

export default LifeComponent;
