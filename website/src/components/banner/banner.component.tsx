import './banner.component.css';
import BannerSkills from '../banner-skills/banner-skills.component';
import BannerText from '../banner-text/banner-text.component';
import BannerImage from '../banner-image/banner-image.component';
import { Skill } from '../../data/interfaces';

interface IProps {
  skillsList: Skill[]
}

const Banner: React.FC<IProps> = ({skillsList}) => {
  return (
    <div className="banner-container">
      <BannerSkills skillsList={skillsList} />
      <BannerText />
      <BannerImage />
    </div>
  )
}

export default Banner;