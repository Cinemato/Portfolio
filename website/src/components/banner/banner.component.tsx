import './banner.component.css';
import BannerSkills from '../banner-skills/banner-skills.component';
import BannerText from '../banner-text/banner-text.component';
import BannerImage from '../banner-image/banner-image.component';
import { Skill, File } from '../../data/interfaces';

interface IProps {
  skillsList: Skill[],
  filesList: File[]
}

const Banner: React.FC<IProps> = ({skillsList, filesList}) => {
  return (
    <div className="banner-container">
      <BannerSkills skillsList={skillsList} />
      <BannerText filesList={filesList} />
      <BannerImage />
    </div>
  )
}

export default Banner;