import seoPng from '../../../assets/img/seo.png'
import seo_sh from '../../../assets/img/seo-sh.png'
import styles from "../../../styles/ServiceDetails.module.css"


const SeoAndAnalyticsServices = Object.assign(
  {},
  {
    graphicImage: seo_sh,
    backgroundPhoto: seoPng,
    title: "SEO And Analytics Services",
    description: (
      <div>
        <div className={styles.entrance__text}>
          Optimizing your search statistics with SEO and Analytics Services
        </div>
        <div className={styles.sign__text}>
          By Western Money Consulting
        </div>
        <div className={"mt-3"}>
          <div className={styles.faded__text}>
            People finding their needed services through search engines are
            increasing rapidly with the newest technology integrations. But what
            most of the businesses fail to understand is in order to take a piece
            from the cake, you have to master the SEO game.
          </div>
          <div className={"mt-3"}>
            <div className={styles.service__description__subtitle}>
              That’s where WMC enters the game,
            </div>
            <div className={styles.faded__text}>
              With more than hundreds of hours of expertized in this niche, our
              consultants are what you want and need. With our latest tech tools
              and our sheer field knowledge, we offer businesses what their full
              potential is.
            </div>
          </div>
        </div>
        <div className={"mt-3"}>
          <div  className={styles.service__description__subtitle}>
            Why You Need Us?
          </div>
          <div className={styles.faded__text}>
            Our consulting services will help you get the results you want and
            need. We have a dedicated team of professionals with experience in
            implementing successful strategies for companies just like yours.
            Whether it’s SEO, SEM or Social Media Marketing, we can help identify
            and develop the best possible approaches for optimizing your website. 
          </div>
        </div>
      </div>
    ),
    descriptionList: (
      <ol className={styles.service__description__list}>
        <li>
          Create high-quality,relevant content: Search engines prioritize
          websites with informative and valuable content that is relevant to the
          users search query.
        </li>
        <li>
          Optimize your website structure and code: Ensure that your website is
          easy to navigate and that it loads quickly. This will help search
          engines understand the content of your website and rank it
          accordingly.
        </li>
        <li>
          Use keywords strategically: Use keywords in your content and meta tags
          that are relevant to your business and that people are searching for.
        </li>
        <li>
          Build backlinks: Backlinks are links from other websites to your
          website. The more high-quality backlinks you have, the more
          authoritative your website will appear to search engines.
        </li>
        <li>
          Optimize for local SEO: Optimize your website for local search results
          by including your business location, hours of operation, and contact
          information.
        </li>
        <li>
          Use analytics: Use web analytics tools to track your websites
          performance and to identify areas that need improvement.
        </li>
        <li>
          Go beyond standard SEO: Look into other forms of optimization like
          voice search optimization, featured snippets optimization and
          mobile-first optimization.
        </li>
        <li>
          Stay up to date with the search engine guidelines and algorithm
          updates. As the search engine algorithms change, you will need to
          adjust your SEO strategy accordingly.
        </li>
      </ol>
    ),
    consulting: (
      <div>
        <div className={styles.service__description__subtitle}>What Is SEO?</div>
        <div className={`${styles.faded__text} mb-5`}>
          SEO is the process of optimizing a website or web page to improve its
          visibility and ranking on search engines, such as Google, Bing, or
          Yahoo. This is done by making changes to the websites content,
          structure, and coding, as well as by building backlinks from other
          websites. The better optimized a website is for search engines, the
          higher it will rank in search results, and the more likely it is to be
          seen by users.
        </div>
        
        <div className={styles.service__description__subtitle}>What’s SEO Marketing?</div>
        <div className={`${styles.faded__text} mb-5`}>
          SEO marketing is the use of SEO techniques to promote a website or
          business. This can include creating high-quality content, optimizing
          website structure and code, and building backlinks from other
          websites. The goal of SEO marketing is to increase the visibility and
          ranking of a website on search engines, resulting in more traffic and
          potential customers. By improving a website&#39;s visibility,
          businesses can reach a wider audience and increase their online
          presence. SEO marketing is a long-term strategy that requires ongoing
          effort and optimization to maintain and improve a website&#39;s search
          engine ranking.
        </div>
        <div className={styles.service__description__subtitle}>Why You Need Us?</div>
        <div className={`${styles.faded__text} mb-5`}>
          Our consulting services will help you get the results you want and
          need. We have a dedicated team of professionals with experience in
          implementing successful strategies for companies just like yours.
          Whether it’s SEO, SEM or Social Media Marketing, we can help identify
          and develop the best possible approaches for optimizing your website.
          What is Google Analytics and How We Help You with It? Google Analytics
          is a free web analytics service offered by Google that tracks and
          reports website traffic. It is a powerful tool that allows website
          owners and marketers to understand how users interact with their
          website, including how they find it, how they navigate through it, and
          what actions they take on it.
        </div>
        <div className={`${styles.service__description__subtitle} mb-2`}>
          With Google Analytics, you can track a variety of data, including:
        </div>
        <ol className={styles.seo__list}>
          <li>
            Number of visitors: See how many people are visiting your website,
            and where they&#39;re coming from (e.g., search engines, social
            media, or other websites).
          </li>
          <li>
            Traffic sources: Understand which channels (e.g., organic search,
            paid search, direct, referral, social) are driving the most traffic
            to your website.
          </li>
          <li>
            Audience demographics: See the age, gender, location, and interests
            of your website visitors.
          </li>
          <li>
            Behavior: Analyze how users interact with your website, including
            which pages they visit, how long they stay, and what actions they
            take.
          </li>
          <li>
            Conversions: Track and measure the goals you set for your website,
            such as form submissions, phone calls, or sales.
          </li>
          <li>
            E-commerce: If your website is an online store, you can track sales
            and revenue, as well as other e-commerce metrics such as average
            order value and shopping cart abandonment rate.
          </li>
        </ol>
        <div className={styles.services__consulting}>
        Google Analytics also provides a number of additional features, such as
        custom dimensions and metrics, event tracking, and the ability to create
        custom reports. Additionally, it can be integrated with other Google
        products such as AdWords and Tag Manager to provide a more comprehensive
        view of your website performance and marketing campaigns.
        <br />
        Google Analytics is a powerful tool that can provide valuable insights
        into how users are interacting with your website, and how you can
        improve it to meet your business goals.
        </div>
      </div>
    ),
  }
);

export default SeoAndAnalyticsServices;
