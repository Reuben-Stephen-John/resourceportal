const DisplayData = ({ moduleId, modulesData }) => {
  const selectedModule = modulesData.find((module) => module.id === moduleId);

  if (!selectedModule) {
    return <div>No module selected</div>;
  }

  return (
    <section class=" dark:bg-gray-900 bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
          <div>
            <h3>{selectedModule.title}</h3>
            <p>{selectedModule.text}</p>
            <a href={selectedModule.link}>Link</a>
          </div>
          <div>{/* next previous buttons here */}</div>
          {/* <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            {title}
          </h2>
          <p class="mb-4 font-light">
            Probability and statistics are two closely related branches of
            mathematics that play a crucial role in understanding and analyzing
            uncertain events and data. These fields provide essential tools and
            techniques for making informed decisions, drawing meaningful
            conclusions, and predicting outcomes in various disciplines, ranging
            from science and engineering to economics and social sciences.
          </p>
          <p class="mb-4 font-medium">
            Probability, in its simplest form, is the measure of the likelihood
            of an event occurring. It quantifies uncertainty and allows us to
            assign a numerical value to the chances of different outcomes. From
            flipping a coin to predicting the weather or estimating the chances
            of winning a game, probability provides a framework for reasoning
            about uncertainty. By understanding probability, we can make better
            decisions by considering the likelihood of different outcomes and
            their potential consequences. Statistics, on the other hand,
            involves the collection, analysis, interpretation, presentation, and
            organization of data. <br />
            <br />
            <div>
              <iframe
                className="centre"
                width="470"
                height="300"
                src="https://www.youtube.com/embed/V3iEsLPAD68"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <br />
            <br />
            It provides methods and techniques for extracting meaningful
            information from data, summarizing it, and drawing conclusions or
            making predictions. Statistics allows us to make inferences and
            generalizations based on observed data, helping us uncover patterns,
            trends, and relationships in the world around us. Probability and
            statistics are interrelated disciplines. Probability provides the
            theoretical foundation for statistics, while statistics utilizes
            probabilistic concepts and methods to draw conclusions from data.
            The key objective of statistics is to draw valid inferences about a
            population based on a sample of data, taking into account the
            inherent uncertainty and variability present in real-world
            observations. In the realm of probability, we often encounter terms
            like events, outcomes, sample space, and probability distributions.
            An event is a particular outcome or a set of outcomes, such as
            rolling a specific number on a die. Outcomes are the possible
            results of an experiment or observation, such as getting a head or a
            tail when flipping a coin.
            <br />
            <br /> The sample space refers to the set of all possible outcomes
            of an experiment, while a probability distribution assigns
            probabilities to different outcomes or events. Statistical analysis
            encompasses a wide range of methods and techniques, including
            descriptive statistics, inferential statistics, hypothesis testing,
            regression analysis, and experimental design. Descriptive statistics
            involves summarizing and describing data using measures such as
            mean, median, mode, variance, and standard deviation. Inferential
            statistics allows us to make predictions or draw conclusions about a
            population based on a sample, using techniques like confidence
            intervals and hypothesis testing. Hypothesis testing is a
            fundamental aspect of statistical analysis. It involves formulating
            and testing hypotheses about the characteristics of a population
            based on sample data. <br />
            <br />
            Regression analysis, on the other hand, examines the relationship
            between variables, allowing us to predict one variable based on
            another. Experimental design focuses on designing and conducting
            experiments to study cause-and-effect relationships, controlling for
            confounding factors and ensuring the validity of conclusions.
            Probability and statistics find applications in various fields and
            industries. In medicine, they help assess the effectiveness of
            treatments and estimate the risk of diseases. In finance and
            economics, probability and statistics underpin models for investment
            strategies, risk analysis, and market predictions. <br />
            <br />
            In engineering and quality control, they aid in process
            optimization, reliability analysis, and product testing. In social
            sciences, probability and statistics provide tools for survey
            design, opinion polling, and social research. In conclusion,
            probability and statistics are indispensable tools for understanding
            uncertainty, analyzing data, and making informed decisions. They
            enable us to quantify uncertainty, extract meaningful information
            from data, and draw valid conclusions about the world around us.
            Whether you are a scientist, economist, engineer, or researcher, a
            solid understanding of probability and statistics is essential for
            navigating the complexities of the modern world.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default DisplayData;
