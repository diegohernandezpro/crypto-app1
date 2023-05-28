import {
  TableName,
  TablePrice,
  TableTimeChange,
  TableSparkline,
  TableRow,
  TableNum,
  PercentDiv,
} from "./NewRow.styles";
import { Slider } from "../Slider/Slider";
import { Sparkline } from "../SparkLine/Sparkline";
import { UpArrowGreen, DownArrowRed } from "@/styles";
import { formatPrice, formatPercentage } from "@/utils";

export const NewRow = ({ coin }) => {
  const rank = coin.market_cap_rank;
  const name = coin.name;
  const price = formatPrice(coin.current_price);
  const percentage1h = coin.price_change_percentage_1h_in_currency;
  const percentage24h = coin.price_change_percentage_24h_in_currency;
  const percentage7d = coin.price_change_percentage_7d_in_currency;
  const totalVolume = coin.total_volume;
  const marketCap = coin.market_cap;
  const circulatingSupply = coin.circulating_supply;
  const totalSupply = coin.total_supply;
  const SparklineData = coin.sparkline_in_7d.price;

  const getPercentage = (percentage) => {
    if (percentage > 0) {
      return (
        <>
          <UpArrowGreen />
          <PercentDiv color="green">{formatPercentage(percentage)}</PercentDiv>
        </>
      );
    }
    return (
      <>
        <DownArrowRed />
        <PercentDiv color="red">{formatPercentage(percentage)}</PercentDiv>
      </>
    );
  };

  return (
    <TableRow>
      <TableNum>{rank}</TableNum>
      <TableName>{name}</TableName>
      <TablePrice>{price}</TablePrice>
      <TableTimeChange>{getPercentage(percentage1h)}</TableTimeChange>
      <TableTimeChange>{getPercentage(percentage24h)}</TableTimeChange>
      <TableTimeChange>{getPercentage(percentage7d)}</TableTimeChange>
      <Slider base={marketCap} fill={totalVolume} />
      <Slider base={circulatingSupply} fill={totalSupply} />
      <TableSparkline>
        <Sparkline pricePoints={SparklineData} />
      </TableSparkline>
    </TableRow>
  );
};
