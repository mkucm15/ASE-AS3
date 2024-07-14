import "./styles.scss";

export default function App() {
  return (
    <>
      <div class="bg-image"></div>
       <div class="Header">
        <div class="image">
          <img
            width="250"
            src="https://elitecryptoconnections.com/Botstuff/TokenOfLiberiaLogo.png"
          />
        </div>
        <a href="https://t.me/TokenofLiberia" target="_blank" id="saleAddress">
          <button id="buyBtn" class="button2">
            JOIN OUR COMMUNITY
          </button>
        </a>

        <a href="app.Token of liberia.club" target="_blank" id="saleAddress">
          <button id="buyBtn" class="button2">
            Wallet
          </button>
        </a>
      </div>

      <div class="main">
        <div class="block">
          <h1>Token of Liberia (TOL)</h1>
          <p>
            {" "}
            Brief information about token and Tokenomics INFO HERE 
            THE INFO BELOW is A EXAMPLE{" "}
          </p>

          <p>
            {" "}
            <h3>01. REFLECTIONS</h3>
            Transactions are taxed 5%, of which 45% is reflected to all holders
            for passive income paid in their preferred tokens, meaning that
            2.25% of every transaction is redistributed to all Token of liberia
            holders.
            <h3>02. LP ACQUISITION</h3>
            35% of sell tax is added to a liquidity pool, increasing the token
            stability and price over time.
          </p>
          <p>
            <h3>03. Marketing</h3>
            Almost 20% of buy/sell tax is allocated to marketing efforts,
            designed to achieve a continuous and sustainable growth.
          </p>
          <p>
            <h3>04. Hyper deflationary</h3>
            30% of buy tax is stored for periodical buybacks and burns,
            gradually decreasing the total supply until it reaches a total of 1
            billion tokens (10% of the original supply), further pushing up the
            price.
          </p>
        </div>

        <div class="block">
          <h1>How to buy</h1>

          <span id="addtokens" class="status err">
            <br />
            <p>Contract Address: ~~~~~~~~~~~~~~~~~~~</p>
            Slippage: 5-7%
            <p>
              Anti-whale limit: can only buy/sell max 100 million TOL tokens
              per transaction
            </p>
          </span>
          <p></p>
          <h3>
            How to Buy With Trust Wallet:{" "}
            <p>
              <a
                href="https://www.youtube.com/watch?v=uinGk6xX2j0"
                target="_blank"
                id="saleAddress"
              >
                <button id="buyBtn" class="button">
                  Click here
                </button>
              </a>
            </p>{" "}
          </h3>
          <h3>
            How to Buy With Metamask:
            <p>
              <a
                href="https://www.youtube.com/watch?v=KpF41eS3YZQ"
                target="_blank"
                id="saleAddress"
              >
                <button id="buyBtn" class="button">
                  Click here
                </button>
              </a>
            </p>
          </h3>
          <div class="buttons">
            <a
              href="https://pancakeswap.finance/swap#/swap?outputCurrency=0x43b7202a0B158eD791DE856884d7874535Deea05"
              target="_blank"
              id="saleAddress"
            >
              <button id="buyBtn" class="raise">
                BUY ON PANCAKESWAP
              </button>
            </a>
            <a
              href="https://app.Token of liberia.club"
              target="_blank"
              id="saleAddress"
            >
              <button id="buyBtn" class="raise">
                REWARDS DASHBOARD
              </button>
            </a>
            <a
              href="https://poocoin.app/tokens/0x43b7202a0b158ed791de856884d7874535deea05"
              target="_blank"
              id="saleAddress"
            >
              <button id="buyBtn" class="raise">
                PRICE CHARTS
              </button>
            </a>
          </div>
        </div>
      </div>

      <div class="main">
        <div class="block block1">
          <h1>What is Token of Liberia?</h1>
          <p>
            A hyper-deflationary community driven DeFi Token with an innovative
            reflections functionality, based on Ethernal finance's DAO contract,
            with a focus on continuous, sustainable growth. We aim to provide
            our holders with a stable source of passive income, by reflecting
            the majority of the transaction tax back to them.
          </p>
          <p>
            At the same time, we are building a growing, sustainable “Ethernal
            Ecosystem”: we offer governance mechanisms through the Ethernal
            community governance platform, this allows Token of liberia holders to
            have a say in the project decisions. Ethernal Finance has a unique
            lottery with burn functions and shared pots, so Token of liberia holders
            can enjoy their chances at winning some big prize pots.
          </p>
          <p>
            The best part? All of these exciting features create more utility,
            by using tokens as their main building block, which in turn will
            keep generating new revenue streams for the holders.
          </p>
        </div>
      </div>
      
    </>
  );
}
