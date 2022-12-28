import {
  AspectRatio,
  Box,
  Center,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import MaxWidthContainer from '@components/Container/MaxWidthContainer';
import SectionContainer from '@components/Container/SectionContainer';
import Image from '@components/Image';
import UnivLink from '@components/UnivLink';
import { EXTERNAL_PAGE_URL } from '@const/index';
import { useTranslation } from 'next-export-i18n';

function Footer() {
  const { t } = useTranslation();

  return (
    <SectionContainer as="footer" id="footer">
      <MaxWidthContainer>
        <Center h="100%" w="100%">
          <Stack
            color="white"
            alignItems="flex-start"
            direction="column"
            spacing={{ base: '42px', md: '50px' }}
            mb="90px"
          >
            <Heading
              as="h2"
              fontWeight={{ base: '700', md: '500' }}
              fontSize={{ base: '32px', md: '48px' }}
              lineHeight={{ base: '42px', md: '62px' }}
              letterSpacing="0.05em"
              textTransform="uppercase"
            >
              {t('Contact_Us.title')}
            </Heading>
            <Text
              fontWeight="500"
              fontSize={{ base: '14px', md: '20px' }}
              lineHeight={{ base: '30px', md: '47px' }}
              letterSpacing="0.05em"
            >
              <UnivLink href={EXTERNAL_PAGE_URL.TAAA_OFFICIAL_WEBSITE}>
                {t('Contact_Us.name')}
              </UnivLink>
              <br />
              {t('Contact_Us.contact_person')} <br />
              {t('Contact_Us.tel')} <br />
              {t('Contact_Us.fax')} <br />
              {t('Contact_Us.Email.title')} {t('Contact_Us.Email.address_1')}{' '}
              <br />
              <Box as="span" visibility="hidden">
                {t('Contact_Us.Email.title')}
              </Box>
              {t('Contact_Us.Email.address_2')} <br />
              {t('Contact_Us.address')} <br />
            </Text>
            <Box w="100%">
              <AspectRatio ratio={856 / 176}>
                <Image
                  src="/images/footer/main.png"
                  alt="2022 digital asia logos"
                  height={176}
                  width={856}
                />
              </AspectRatio>
            </Box>
            <Box w="100%">
              <AspectRatio ratio={582 / 782}>
                <Image
                  src="/images/footer/sponsor-logos.png"
                  alt="2022 digital asia sponsor logos"
                  height={782}
                  width={582}
                  unoptimized
                />
              </AspectRatio>
            </Box>
          </Stack>
        </Center>
      </MaxWidthContainer>
    </SectionContainer>
  );
}

export default Footer;
