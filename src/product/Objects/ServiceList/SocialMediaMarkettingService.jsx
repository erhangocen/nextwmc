import social_mediaImg from '../../../assets/img/socialMedia.png'
import social_sh from '../../../assets/img/social-media-sh.png'
import styles from "../../../styles/ServiceDetails.module.css"


const SocialMediaMarkettingService = Object.assign({},{
    graphicImage: social_sh,
    backgroundPhoto: social_mediaImg,
    title: "Social Media Marketting Services",
    description: (
      <div>
        <div className={styles.entrance__text}>
          Enhance Your Online Presence with Social Media Marketing Services
        </div>
        <div className={styles.sign__text}>
          By Western Money Consulting
        </div>
        <div className={"mt-3"}>
          <div className={styles.faded__text}>
        Need a team of experienced marketing agents to grow your business, attract new customers, build a brand awareness and drive traffic to your website with social media?
          </div>
          <div className={"mt-3"}>
            <div className={styles.service__break__sentence}>
            Then you came to the right hands, 
            </div>
            <div className={styles.faded__text}>
            In WMC we build long-term relationships, develop brand awareness and increase website traffic which all ends up beneficial to your pocket and your time.
            </div>
          </div>
        </div>
      </div>
    ),
    descriptionList: (
      <ol className={styles.service__description__list}>
        <li>
          <div className={styles.service__description__list__title}>Build Relationships,</div>
          Engagement is a key factor in building a strong bond with your
          audience. We help you increase engagement (likes, comments, etc.) on
          your social media posts, allowing you to build a stronger connection
          with your audience and drive more sales.
        </li>
        <li>
          <div className={styles.service__description__list__title}>Develop Brand Awareness,</div>
          We will develop a strategy for social media marketing that
          capitalizes on your brand identity and creates more brand awareness.
          We will post regularly to your social media channels and monitor
          performance to make sure you are engaging with your followers. We
          offer great rates and are happy to provide references from previous
          customers.
        </li>
        <li>
          <div className={styles.service__description__list__title}>Perfecting Website Statistics,</div>
          Increase website traffic to your site, and drive higher conversions
          with our Consulting service. Well work with you to develop a custom
          engagement plan that helps you gain new visitors and keep them
          coming back through retargeting ads, content marketing, and other
          methods.
        </li>
      </ol>
    ),
    consulting:
      "What Makes WMC So Special in Marketing Business? As opposed to new-gen marketing agencies, WMCs main card is how we do our business. We merge AI and the latest analytics tools with unmatched guerilla marketing strategies. When unmatched perspicacity, coupled with our latest innovations, makes us flawless yet human. At WMC, we have built our foundation on these virtues.",
})

export default SocialMediaMarkettingService;