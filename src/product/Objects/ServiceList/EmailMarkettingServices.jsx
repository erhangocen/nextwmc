import emailImage from '../../../assets/img/email.png'
import email_sh from '../../../assets/img/email-sh.png'
import styles from "../../../styles/ServiceDetails.module.css"


const EmailMarkettingServices = Object.assign(
  {},
  {
    graphicImage: email_sh,
    backgroundPhoto: emailImage,
    title: "Email Marketting Services",
    description: (
      <div>
        <div className={styles.entrance__text}>
          Reach Out to Your Customers with Email Marketing Services
        </div>
        <div className={styles.sign__text}>
          By Western Money Consulting
        </div>
        <div className={`${styles.faded__text} mt-3`}>
        Did you know that for <span className={styles.special__text}>
 every $1 spent on email marketing, the average
          ROI is $40 or Emails are 6x more </span>
           likely to get click-through compared
          to other marketing methods. It does not take an expert to reckon the
          success. But an expert can make it better. <br />
          At Western Money Consulting, experts who have years in the field will
          build your email newsletter and increase your return-on-investment
          while you are benefiting both money and time.
        </div>
      </div>
    ),
    descriptionList: (
      <div>
        <h4 className={`${styles.service__break__sentence} mt-4 mb-3`}>What are the benefits of email marketing?</h4>
        <ol className={styles.service__description__list}>
          <li>
            Cost-effectiveness: Email marketing is relatively inexpensive
            compared to other forms of marketing, such as television or print
            advertising.
          </li>
          <li>
            Targeted messaging: Email marketing allows businesses to send
            targeted messages to specific groups of customers or subscribers,
            based on their interests or past purchasing behavior.
          </li>
          <li>
            Measurable results: Email marketing campaigns can be easily tracked
            and measured, allowing businesses to see which campaigns are most
            effective and make adjustments accordingly.
          </li>
          <li>
            Increased engagement: Email marketing can be used to increase
            customer engagement by providing valuable content, such as special
            offers, discounts, or educational resources.
          </li>
          <li>
            High ROI: Email marketing has a high return on investment (ROI) and
            is one of the most effective ways to reach and engage customers.
          </li>
          <li>
            Personalization: Email marketing allows businesses to personalize
            their communication with the customer and make them feel valued.
          </li>
          <li>
            Builds relationship: Email marketing can be used to build
            relationships with customers by regularly providing them with useful
            information, offers and promotions.
          </li>
        </ol>
        <p>
          It all comes good to ear, but standing out in email marketing can be
          challenging, as inboxes are often flooded with business emails.
          <br />
          At WMC, we base our email campaigns on these 8 topics and it works
          charmly.
        </p>
      </div>
    ),
    consulting: (
      <div>
        <ol className={styles.service__description__list}>
          <li>
           <span className={styles.service__description__list__title}>Personalization: </span> Personalize your email messages with the
            recipient&#39;s name, location, or other relevant information.
          </li>
          <li>
            <span className={styles.service__description__list__title}>Segmentation: </span>Segment your email list based on characteristics such
            as location, purchase history, or engagement level. This will allow
            you to send more targeted and relevant messages.
          </li>
          <li>
            <span className={styles.service__description__list__title}>Unique subject line: </span>Use a unique and compelling subject line that
            will catch the recipients attention and entice them to open the
            email.
          </li>
          <li>
            <span className={styles.service__description__list__title}>Mobile optimization: </span>Optimize your emails for mobile devices, as
            many people check their email on-the-go.
          </li>
          <li>
            <span className={styles.service__description__list__title}>Engaging content: </span>Use eye-catching images, videos, and infographics
            to make your email more engaging.
          </li>
          <li>
            <span className={styles.service__description__list__title}>Interactive elements: </span>Add interactive elements such as polls or
            quizzes to increase engagement and make the email more interesting.
          </li>
          <li>
            <span className={styles.service__description__list__title}>Timing: </span>Send your emails at the right time when the recipient is
            most likely to be checking their inbox and be receptive to your
            message.
          </li>
          <li>
            <span className={styles.service__description__list__title}>A/B testing: </span>Test different elements of your email campaigns, such
            as subject lines, headlines, and calls-to-action, to see what
            resonates with your audience.
          </li>
        </ol>
        <div className={styles.services__consulting}>
          With our proven strategies and experiences, we are willing to make
          your campaigns extraordinarily good.
        </div>
      </div>
    ),
  }
);

export default EmailMarkettingServices;
