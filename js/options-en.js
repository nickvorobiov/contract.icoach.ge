var options = [
  {
    id: "base",
    name: "Basic",
    items: [
      {
        name: "Project management at the first and second stage",
        content: ["Team selection and management"]
      },
      {
        name: "Collection of leads",
        content: ["Creating, designing and filling pages on Facebook and Instagram, or connecting existing ones", "Setting up the collection of leads from potential customers"]
      },
      {
        name: "Setting up advertising for the first step",
        content: ["Creating banners", "Selecting audiences", "Creating advertisements for each variant of the name of the first step", "Setting up and running test advertising", "Report on the results of a test advertising campaign"]
      }
    ],
    partnerprice: 600,
    friendprice: 1400,
    fullprice: 3700
  },
  {
    id: "smm",
    name: "Social networks",
    items: [
      {
        name: "Content for a Facebook and Instagram page",
        content: ["Creating a content plan", "Writing warm-up content", "Design for content", "Publishing content on a page"]
      }
    ],
    partnerprice: 0,
    friendprice: 0,
    fullprice: 0
  },
  {
    id: "crm",
    name: "Connecting CRM",
    items: [
      {
        name: "Customer Management System",
        content: ["Connection of the Trello customer management system", "Connection of notifications about new applications in the Telegram"]
      },
      {
        name: "Project management in the third stage",
        content: ["Monitoring the processing of leads during the third stage"]
      }
    ],
    partnerprice: 400,
    friendprice: 800,
    fullprice: 1300
  },
  {
    id: "lp",
    name: "Landing page of the first step",
    items: [
      {
        name: "Creating a landing page for the first step",
        content: ["Selection of 5 options for the name of the first step", "Writing landing page text", "Layout into a standard template and landing page programming", "Connecting of lead form"]
      },
      {
        name: "Video invitation",
        content: ["Providing a structure for video invitation", "Consulting on video recording", "Checking of video"]
      }
    ],
    partnerprice: 0,
    friendprice: 0,
    fullprice: 0
  },
  {
    id: "mainlp",
    name: "Landing of the main product",
    items: [
      {
        name: "Creating a landing page for the main product",
        content: ["Writing landing page text", "Layout into a standard template and landing page programming", "Connecting of order form"]
      },
      {
        name: "Video Invitation",
        content: ["Providing a structure for video invitation", "Consulting on video recording", "Checking of video"]
      },
      {
        name: "Setting up advertising on the main product",
        content: ["Creating banners", "Selecting audiences", "Preparing advertisements", "Setting up and running test advertising", "Report on the results of a test advertising campaign"]
      }
    ],
    partnerprice: 0,
    friendprice: 0,
    fullprice: 0
  }
/*,
  {
    id: "leadmagnet",
    name: "Preset",
    items: [
      {
        name: "Testing 5 lidmagnit variants",
        content: ["Choosing 5 possible titles of lidmagnit", "Creating banners", "Selecting audiences", "Preparing advertisements", "Setting up and running advertising", "Report on the results of a test advertising campaign"]
      },
      {
        name: "Making One Led Magnet",
        content: ["Writing the text of a lead magnet", "Layout of the lead magnet in PDF"]
      }
    ],
    partnerprice: 1200,
    friendprice: 2500,
    fullprice: 5000
  },
  {
    id: "warmup",
    name: "Warming Series",
    items: [
      {
        name: "A series of warm-up letters for those who signed up for the first step",
        content: ["Creating a plan of selling messages", "Writing selling messages", "Setting up the sending of a series of messages"]
      },
      {
        name: "A series of booster letters for those who have passed the first step",
        content: ["Creating a plan of selling messages", "Writing selling messages", "Setting up the sending of a series of messages"]
      }
    ],
    partnerprice: 800,
    friendprice: 1600,
    fullprice: 3500
  },
  {
    id: "design",
    name: "Custom Design",
    items: [
      {
        name: "Custom Design",
        content: ["Landing of the first step", "Landing of the main product", "Landing of lead magnet", "Inner pages", "Banners"],
      }
    ],
    partnerprice: 500,
    friendprice: 900,
    fullprice: 1500
  }*/
];

var packages = {
  basic: ["base", "smm"],
  start: ["base", "smm", "crm", "fb", "lp", "mainlp"]
//  optimal: ["base", "smm", "crm", "fb", "lp", "mainlp", "leadmagnet"],
//  premium: [base, smm, crm, fb, lp, mainlp, leadmagnet, warmup, design]
};