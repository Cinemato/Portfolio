import './banner.component.css';
import BannerSkills from '../banner-skills/banner-skills.component';
import BannerText from '../banner-text/banner-text.component';
import BannerImage from '../banner-image/banner-image.component';

const Banner = () => {
  return (
    <div className="banner-container">
      <BannerSkills />
      <BannerText />
      <BannerImage />
    </div>
  )
}

export default Banner;