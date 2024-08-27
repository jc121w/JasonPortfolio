import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const variants = {
  animate: {
    transition: { staggerChildren: 0.5, delayChildren: 1.2 },
  },
  initial: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};
const textVariants = {
  animate: { x: 0, opacity: 1 },
  initial: { x: -50, opacity: 0 },
};
const pathVariants = {
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 2.5, ease: "easeInOut", delay: 1 },
  },
  initial: {
    opacity: 0,
    pathLength: 0,
  },
};
export const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [nameController, setNameController] = useState("");
  const [emailController, setEmailController] = useState("");
  const [msgController, setMsgController] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    _event: Event | React.SyntheticEvent<any, Event>,
    reason: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm("service_auget5j", "template_k35666e", form.current, {
          publicKey: "C-RZKFE5y5tI2FBls",
        })
        .then(
          () => {
            setNameController("");
            setEmailController("");
            setMsgController("");
            setSuccess(true);
            console.log("SUCCESS!");
          },
          (error) => {
            setError(true);
            console.log("FAILED...", error.text);
          }
        );
    } else {
      console.log("Form Ref Is Null");
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameController(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailController(event.target.value);
  };
  const handleMsgChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMsgController(event.target.value);
  };

  return (
    <div className="flex flex-col items-center mt-5 gap-8">
      <div className="text-3xl under-before relative pb-3 2xl:text-4xl">
        Contact Me
      </div>{" "}
      <div className=" flex flex-col  justify-between max-w-4xl gap-8 p-5 items-center">
        <div className="border-[#1B263B] border p-5 px-10 rounded-lg">
          {" "}
          <motion.div
            className="flex flex-col gap-4"
            variants={variants}
            whileInView="animate"
            initial="initial"
            viewport={{ once: true }}
          >
            <motion.h1
              className="text-xl font-semibold"
              variants={textVariants}
            >
              Send me a message
            </motion.h1>
            <motion.div className="text-pretty text-lg" variants={textVariants}>
              Please contact me through this form or directly at
              <motion.span whileHover={{ scale: 1.08 }}>
                <u> jc121w@gmail.com</u>.
              </motion.span>{" "}
            </motion.div>
            <motion.form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-3 mt-8"
              variants={textVariants}
            >
              <motion.input
                type="text"
                required
                placeholder="Name"
                name="name"
                value={nameController}
                onChange={handleNameChange}
                className="p-4 rounded-md focus:border-[#1B263B] placeholder-[#0D1B2A] bg-[rgba(119,141,169,0.2)]  "
              />
              <motion.input
                type="email"
                required
                placeholder="Email"
                name="email"
                value={emailController}
                onChange={handleEmailChange}
                className="p-4 rounded-md placeholder-[#0D1B2A] bg-[rgba(119,141,169,0.2)]"
              />
              <motion.textarea
                required
                placeholder="Message"
                name="message"
                value={msgController}
                onChange={handleMsgChange}
                rows={8}
                className="p-4 rounded-md placeholder-[#0D1B2A] bg-[rgba(119,141,169,0.2)] "
              ></motion.textarea>
              <motion.button
                className="border p-3 rounded-xl font-semibold bg-[rgba(119,141,169,0.2)]"
                type="submit"
                whileHover={{
                  scale: 1.1,
                  borderColor: "#0D1B2A",
                  color: "#1B263B",
                }}
                whileTap={{ rotate: "2.5deg" }}
                onClick={handleClick}
              >
                Submit
              </motion.button>
            </motion.form>
          </motion.div>
        </div>

        <svg
          className="smile_icon"
          width="auto"
          height="200px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.ellipse
            cx="15"
            cy="10.5"
            rx="1"
            ry="1.5"
            fill="#2b2d42"
            variants={pathVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          />
          <motion.ellipse
            cx="9"
            cy="10.5"
            rx="1"
            ry="1.5"
            fill="#2b2d42"
            variants={pathVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          />
          <motion.path
            d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16"
            stroke="#2b2d42"
            stroke-width="1.5"
            stroke-linecap="round"
            variants={pathVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          />
          <motion.path
            d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
            stroke="#2b2d42"
            stroke-width="1.5"
            stroke-linecap="round"
            variants={pathVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          />
        </svg>
      </div>
      <div className="">
        {success && (
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
              Message sent successfully.
            </Alert>
          </Snackbar>
        )}
        {error && (
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert severity="error" variant="filled" sx={{ width: "100%" }}>
              Message failed.
            </Alert>
          </Snackbar>
        )}
      </div>
    </div>
  );
};

export default Contact;
