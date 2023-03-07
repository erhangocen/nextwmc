import digital_strategyImg from '../../../assets/img/digital_strategy.png'
import ads_sh from '../../../assets/img/ads-sh.png'
import styles from "../../../styles/ServiceDetails.module.css"


const DigitalStrategyAndGuerillaMarketting = Object.assign(
  {},
  {
    graphicImage: ads_sh,
    backgroundPhoto: digital_strategyImg,
    title: "Digital Strategy And Guerilla Marketting",
    description: (
      <div>
        <div className={styles.entrance__text}>
          Plan your online presence with Guerilla Marketing and Digital Strategy
          Services
        </div>
        <div className={styles.sign__text}>By Western Money Consulting</div>
        <div className={`${styles.faded__text} mt-3`}>
        Every business needs a plan, most only get the average, while all crave it good. We with our guerilla marketing strategies, are here to quench your cravings good, extraordinarily good.
        <br/>
At WMC, we plan every move of your online presence with our experienced salesmen and agents. 

        </div>
      </div>
    ),
    descriptionList: (
      <ol className={styles.service__description__list}>
        <li>
        <div className={styles.service__description__list__title}>Guerilla Marketing,</div>
          At WMC, our strategies depend on the clients’ approval. If they are
          willing to go south, then we are going south. We identify our rivals’
          marketing capacity, their ads, their market gap, their target
          demographics and use these parameters to go after their clients.
        </li>
        <li>
        <div className={styles.service__description__list__title}>Planning Your Moves,</div>
          Knowing where you at in the game is essential, especially in a crowded
          market. We help our clients to understand where the market is going,
          what the rivals are doing and what should we do in order to get ahead
          of them in every possible way.
        </li>
        <li>
        <div className={styles.service__description__list__title}>Attracting Your Target Audience,</div>
          We help our clients to define and reach their ideal customer base. Our
          deep resources on demographics make us a shining agency in the social
          media marketing world.
        </li>
        <li>
        <div className={styles.service__description__list__title}>Rival Tracking,</div>
          It is our greatest weapon. We get our clients steps ahead from their
          local and national rivals by using our open-source intelligence
          (OSINT) strategies.
        </li>
      </ol>
    ),
    consulting: (
      <div >
        <div className={styles.service__description__subtitle}>Our Past with This Area</div>
        <div className={`${styles.faded__text} mb-4`}>
          All our specialists have a history of collecting information, hacking
          or contributing to the web. We have been coding, creating and
          disclosing since we were fourteen. Our past combined with our strong
          companionship makes us an immaculate force in this realm of business.
          It is and always has been our.
        </div>
        <div className={styles.service__description__subtitle}>What Makes WMC So Special in Marketing Business?</div>
        <div className={`${styles.faded__text} mb-3`}>
          As opposed to new-gen marketing agencies, WMC’s main card is how we do
          our business. We merge AI and the latest analytics tools with
          unmatched guerilla marketing strategies. When unmatched perspicacity,
          coupled with our latest innovations, makes us flawless yet human. At
          WMC, we have built our foundation on these virtues.
        </div>
      </div>
    ),
  }
);

export default DigitalStrategyAndGuerillaMarketting;
