import './App.css';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { RiSubtractFill } from "react-icons/ri";
const BulletPoints = () => {
    return (
        <div style={{height: 700, marginTop: 100, }}>
             <br></br>
             <br></br>
             <AnimationOnScroll animateIn='animate__fadeInUp'>
            <Typography style={{color: 'var(--text-primary)',  fontSize: 35 , fontWeight: 'bold'}}>
               About Me
            </Typography>
            </AnimationOnScroll>
            <hr style={{borderColor:'#9DFFCC' }}  />
            <AnimationOnScroll animateIn='animate__fadeInUp'>
                <Typography style={{color: 'var(--text-primary)',  fontSize: 25 , fontWeight: 'bold'}}>  <RiSubtractFill style={{padding: 10, marginBottom: -10, }}/>
                1+ year with React-Native development team
               </Typography>
            </AnimationOnScroll>
            <br/>
            <br/>
            <AnimationOnScroll animateIn='animate__fadeInUp'>
                <Typography style={{color: 'var(--text-primary)',  fontSize: 25 , fontWeight: 'bold'}}>  <RiSubtractFill style={{padding: 10, marginBottom: -10, }}/>
                Interested in frontend and full-stack development.
               </Typography>
            </AnimationOnScroll>
             <br/>
             <br/>
             <AnimationOnScroll animateIn='animate__fadeInUp'>
            <Typography style={{color: 'var(--text-primary)',  fontSize: 25 , fontWeight: 'bold'}}>  <RiSubtractFill style={{padding: 10, marginBottom: -10, }}/>
            Well versed in Agile Methodologies and applications such as Figma, Meistertask and Github
               </Typography>
             </AnimationOnScroll >
             <br/> <br/>
             <AnimationOnScroll animateIn='animate__fadeInUp'>
            <Typography style={{color: 'var(--text-primary)',  fontSize: 25 , fontWeight: 'bold'}}>  <RiSubtractFill style={{padding: 10, marginBottom: -10, }}/>
            Looking for an environment to learn as much possible and produce dry, reusable code!
               </Typography>
             </AnimationOnScroll>
             <br/> <br/>
             <br></br>
             <br></br>
        </div>
    )
    }
export default BulletPoints;

