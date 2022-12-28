import { List, ListIcon, ListItem, SystemProps } from '@chakra-ui/react';

import StarIcon from './StarIcon';

export type PriceListProps = {
  list: string[];
} & SystemProps;

function PriceList(props: PriceListProps) {
  const { list, ...systemProps } = props;

  return (
    <List spacing="18px" {...systemProps}>
      {list.map((item) => {
        return (
          <ListItem key={item}>
            <ListIcon as={StarIcon} />
            {item}
          </ListItem>
        );
      })}
    </List>
  );
}

export default PriceList;
