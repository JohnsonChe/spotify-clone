import {
  ListIcon,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import NextLink from 'next/link';

const MenuItem = ({menuItem}) => {
  return (
    <LinkBox>
      <NextLink href={menuItem.route} passHref>
        <LinkOverlay>
          <ListIcon as={menuItem.icon} color="white" marginRight="20px" />
          {menuItem.name}
        </LinkOverlay>
      </NextLink>
    </LinkBox>
  )
}

export default MenuItem;