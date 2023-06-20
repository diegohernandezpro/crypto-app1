import { CoinFacts } from "../CoinFacts/CoinFacts";
import { CoinPrice } from "../CoinPrice/CoinPrice";
import { CoinDisplay } from "../CoinDisplay/CoinDisplay";
import { CoinDescription } from "../CoinDescription/CoinDescription";
import { CoinFooter } from "../CoinFooter/CoinFooter";
import { Container, Wrapper, StyledP } from "./CoinSummary.styles";
import { formatCoinPrice, formatPercentage } from "@/utils";

export const CoinSummary = ({ coin, currency, currencySymbol }) => {
  currency = currency?.toLowerCase();
  const symbol = coin?.symbol;
  const coinData = {
    name: coin?.name,
    image: coin?.image?.large,
    link: coin?.links?.homepage?.[0],
  };

  const priceData = {
    price: formatCoinPrice(
      coin?.market_data?.current_price?.[currency],
      currencySymbol
    ),
    coin_percentage:
      coin?.market_data?.market_cap_change_percentage_24h_in_currency?.[
        currency
      ],
    ath: formatCoinPrice(coin?.market_data.ath?.[currency], currencySymbol),
    ath_percentage: coin?.market_data?.ath_change_percentage?.[currency],
    ath_date: coin?.market_data?.ath_date?.[currency].slice(0, 10),
    atl: formatCoinPrice(coin?.market_data.atl?.[currency], currencySymbol),
    atl_percentage: coin?.market_data?.atl_change_percentage?.[currency],
    atl_date: coin?.market_data?.atl_date?.[currency].slice(0, 10),
  };

  const description = coin?.description?.en;

  const coinFacts1 = {
    "Market Cap": formatCoinPrice(
      coin?.market_data?.market_cap?.[currency],
      currencySymbol
    ),
    "Fully Diluted Valuation": formatCoinPrice(
      coin?.market_data?.fully_diluted_valuation?.[currency],
      currencySymbol
    ),
    "Price Change 24h": formatPercentage(
      coin?.market_data?.market_cap_change_percentage_24h_in_currency?.[
        currency
      ]
    ),
    "Volume / Market": formatPercentage(
      coin?.market_data?.total_volume?.[currency] /
        coin?.market_data?.market_cap?.[currency]
    ),
  };

  const coinFacts2 = {
    "Total Volume": formatCoinPrice(
      coin?.market_data?.total_volume?.[currency],
      currencySymbol
    ),
    "Circulating Supply": formatCoinPrice(
      coin?.market_data?.circulating_supply,
      symbol
    ),
    "Max Supply": coin?.market_data?.max_supply
      ? formatCoinPrice(coin?.market_data?.max_supply, symbol)
      : "∞",
  };
  const links = {
    blockChain: coin?.links?.blockchain_site[0],
    repos: coin?.links?.repos_url?.github[0],
    forum: coin?.links?.official_forum_url[0],
  };

  return (
    <>
      <Container>
        <StyledP>Your Summary:</StyledP>
        {coin && (
          <Wrapper>
            <CoinDisplay coinData={coinData} />
            <CoinPrice priceData={priceData} />
            <CoinFacts
              coinFacts1={coinFacts1}
              coinFacts2={coinFacts2}
              currencySymbol={currencySymbol}
            />
          </Wrapper>
        )}
      </Container>
      <CoinDescription description={description} />
      <CoinFooter links={links} />
    </>
  );
};
