import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, info } = frontmatter;
  const { contact_form_action } = config.params;

  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}
        <div className="section row pb-0">
          <div className="col-12 md:col-6 lg:col-7 pt-4">
            <form
              className="contact-form"
              method="POST"
              action={contact_form_action}
            >
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-textarea w-full rounded-md"
                  rows="7"
                  placeholder="Your message"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send Now
              </button>
            </form>
          </div>
          <div className="content col-12 md:col-6 lg:col-5">
            <p className="text-left pt-0 mt-0" >If you're interested in partnering with Staff Zone or have any questions about our services, we
              would love to hear from you. Our friendly and knowledgeable team is ready to assist you in
              finding the perfect staff for your age care centre.
              You can reach us by phone at [Phone number] or by email at [Email address]. Alternatively,
              feel free to visit our office located at [Office address]. We are available [Days and hours of
              operation] to discuss your staffing needs and provide personalized solutions.
              Choose Staff Zone for reliable, qualified, and experienced staff who will make a positive
              difference in the lives of your residents. Together, let's create an age care environment that
              promotes comfort, dignity, and well-being.
              Thank you for considering Staff Zone. We look forward to working with you</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
