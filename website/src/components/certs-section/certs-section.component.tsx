import './certs-section.component.css';
import { Skill } from '../../data/interfaces';
import SectionTitle from '../section-title/section-title.component';
import SkillInfo from '../skill-info/skill-info.component';
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import Spinner from '../spinner/spinner.component'

interface IProps {
  certsList: Skill[]
}

const CertsSection: React.FC<IProps> = ({certsList}) => {
  const { hasLoaded } = useSelector((state: RootState) => state.info);

  return (
    <div className="skills-section-container">
        <SectionTitle title="Certificates" />
        {hasLoaded ?
        <>
          <div className="skills-container">
              {[...certsList].sort((a,b) => a.order - b.order).map((cert) => {
                return <SkillInfo skill={cert} key={cert.id} view={true} width='175px' />
              })}
          </div>
        </>   
        : <Spinner />
        }
    </div>
  )
}

export default CertsSection