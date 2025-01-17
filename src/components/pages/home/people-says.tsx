import { Section } from '@/components/pages/section';
import { Testimonials } from '@/components/marketing/testimonials';
import { Icons } from '@/components/icons';

export function PeopleSays() {
  return (
    <Section className="bg-transparent px-8 pb-[4rem] sm:pb-[8rem] md:pb-[7.8rem] lg:pb-[7.3rem] xl:pb-[6.1rem]">
      <Testimonials
        className="p-0"
        title="Müşteri Yorumları"
        description="Müşterilerimizin bize olan güveni ve memnuniyeti bizim için çok önemli."
        testimonials={{
          best: {
            name: 'Mehmet Yiğit Yalım',
            company: 'Apple',
            companyLogo: '/logos/apple.svg',
            title: 'Yazılım Girişimcisi',
            description: 'Çok hızlı ve güvenilir bir hizmet aldım. Herkese tavsiye ederim.',
          },
          others: [
            {
              name: 'Ali Veli',
              company: 'Acme Corp',
              companyLogo: 'https://via.placeholder.com/50',
              customerImage: 'https://via.placeholder.com/150',
              title: 'Harika Hizmet!',
              description: 'Aldığımız hizmetten çok memnunuz. Kesinlikle tavsiye ederiz!',
              icon: (
                <svg
                  width="80"
                  viewBox="0 0 1088 239"
                  fill="currentcolor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  className="text-offgray-800 dark:text-offgray-200 ml-auto"
                >
                  <path d="M23 0H0v30h23V0Zm961.067 69.334c-16.667-.134-22.267-22-7.334-28.8 7.867-3.467 18.934-.134 22 6.933 4.797 10.266-2.933 21.867-14.666 21.867ZM708.333 193.332v-148h25.334l.266 26 .4 26.134 4.534-3.334C746.6 88.4 755.667 86 769.667 86c10.266.133 14 .667 19.6 3.2 10.133 4.533 18.267 13.734 21.6 24.8 2.533 8.133 2.8 12.267 2.8 44.133v35.2H788.467l-.4-34.399c-.4-33.467-.534-34.4-3.6-39.867-4.8-8.267-12.267-11.6-24.134-10.8-11.333.8-17.333 4.267-22.4 12.8l-3.6 6.266-.4 33.067-.4 32.933H708.333Zm130.667-74v74h24v-12.266l5.2 4.133c18.933 15.067 51.467 12.533 69.333-5.333C953.4 164 957.4 135.333 947 113.733c-13.333-27.333-51.733-37.2-76.267-19.6l-6.4 4.534V45.334H839v73.999Zm71.733-8.399c6.667 3.199 12.934 11.066 15.067 18.933 2 7.466.8 20.4-2.533 27.067-7.334 14.266-25.334 20.399-40.267 13.599-13.067-5.866-18-14.133-18-30.533 0-10 .4-12.133 3.733-17.6 8.4-14.4 25.867-19.2 42-11.466Zm-578.4 82.399V53.067l40.4.533c34 .533 41.467.934 47.6 2.934 32 10.4 50.667 35.066 50.667 66.799-.133 27.201-13.733 50.267-36.533 61.334-16.534 8-21.067 8.666-63.734 8.666h-38.4Zm99.867-102c-6.533-7.2-14.8-11.733-24.933-13.866-3.867-.8-16.4-1.467-27.6-1.467H359v94.934l25.733-.534 25.734-.4 8.8-4.4c10.133-4.933 16-10.933 20.933-21.6 2.933-6.4 3.467-9.066 3.467-20.667 0-15.733-2.4-22.133-11.467-32ZM1027 74.668v12h-17.33V108H1027v30c0 26.667.27 30.667 2.67 37.067 4.26 11.333 12 17.2 26.13 19.467 8 1.199 18 .266 25.2-2.534 7.2-2.8 7.33-3.333 3.87-12.267-1.74-4.533-3.34-8.266-3.6-8.533-.27-.266-3.34.4-6.94 1.467-8 2.533-14.13 1.467-18.26-2.934-2.94-3.199-3.07-4-3.47-32.533l-.4-29.2H1080.33V86.667h-28v-24H1027v12ZM490.867 96.134c4.666-3.334 12.533-6.267 23.466-8.934 10.4-2.4 30.934-1.6 40.667 1.6 9.467 3.2 19.867 13.2 23.333 22.533 2.134 5.867 2.534 11.601 3.067 44.4l.4 37.6h-24.133v-10.666L551.8 187.2c-14.667 11.2-43.867 10.4-57.067-1.6-7.466-6.666-10.4-13.2-10.4-22.533 0-9.6 3.334-17.334 9.867-22.667 8.4-6.8 16.267-8.667 40.533-9.466l21.6-.534-.8-4.933c-1.333-7.333-4-11.6-9.2-14.8-9.733-6-30.8-4.533-44 3.2l-5.466 3.2-4.934-9.067L487 98.934l3.867-2.8Zm42.666 79.599c13.467-.933 22.8-9.733 22.8-21.466V148h-16.266c-24.4.134-30.4 2.934-30.4 14.267 0 10.4 7.733 14.667 23.866 13.466Zm94.667-88c-16.933 4.534-26.533 14.134-27.6 27.6-.8 10.267.533 16 5.333 21.467 6.801 7.734 14.4 10.667 38.267 14.667 14.534 2.4 19.733 4.667 20.933 9.067 2.267 9.333-4.399 13.466-21.466 13.333-13.2-.134-20.534-1.733-30.534-6.667-3.6-1.867-6.666-3.066-6.8-2.933-.266.267-2.533 4.667-5.066 9.867l-4.8 9.599 7.6 3.334c25.2 11.2 57.866 10.4 74.667-1.734 13.599-9.866 16-30.799 4.799-42-5.6-5.6-14.933-9.066-34-12.666-16.4-3.067-21.6-5.2-24-9.467-2.133-4.133.667-9.6 6.267-12.266 6.8-3.334 25.6-2.934 35.2.533 2.389.876 4.873 1.752 6.714 2.4l.087.031c1.198.423 2.113.745 2.532.902 1.467.533 3.334-1.866 6.401-8.266 4.266-8.667 4.399-9.2 2.133-10.8-9.6-6.934-40.934-10.267-56.667-6Zm342.8 105.6V86.667h25.333v106.666H971ZM0 52h23v30H0V52Zm0 105h23v30H0v-30Zm23 52H0v30h23v-30Zm11 0h30v30H34v-30Zm85 30H84v-30h113v.659C176.113 227.915 148.839 239 119 239ZM36 104h30v30H36v-30ZM64 0H34v30h30V0Zm153.129 52a119.498 119.498 0 0 1 14.859 30H43V52h174.129ZM238 119.5c0-5.25-.34-10.424-.999-15.5H91v30h146.126c.577-4.755.874-9.594.874-14.5Zm-6.012 37.5a119.498 119.498 0 0 1-14.859 30H43v-30h188.988ZM84 0h35c29.365 0 56.246 10.736 77 28.477V30H84V0Z"></path>
                </svg>
              ),
            },
            {
              name: 'Ayşe Yılmaz',
              company: 'Beta Ltd.',
              title: 'Mükemmel Destek',
              description: 'Destek ekibi çok yardımcı oldu. Her sorumuzu hızlıca çözdüler.',
              icon: (
                <svg
                  viewBox="0 0 64 57"
                  fill="currentcolor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  width="24"
                  className="text-offgray-800 dark:text-offgray-200 ml-auto"
                >
                  <path d="M13.873 3.805C21.21 9.332 29.103 20.537 32 26.55v15.882c0-.338-.13.044-.41.867-1.512 4.456-7.418 21.847-20.923 7.944-7.111-7.32-3.819-14.64 9.125-16.85-7.405 1.264-15.73-.825-18.014-9.015C1.12 23.022 0 8.51 0 6.55 0-3.268 8.579-.182 13.873 3.805Zm36.254 0C42.79 9.332 34.897 20.537 32 26.55v15.882c0-.338.13.044.41.867 1.512 4.456 7.418 21.847 20.923 7.944 7.111-7.32 3.819-14.64-9.125-16.85 7.405 1.264 15.73-.825 18.014-9.015C62.88 23.022 64 8.51 64 6.55c0-9.818-8.578-6.732-13.873-2.745Z"></path>
                </svg>
              ),
            },
            {
              name: 'Mehmet Akif',
              company: 'Gamma Inc.',
              title: 'Hızlı ve Güvenilir',
              description: 'Hizmetlerinden çok memnun kaldık. Herkese tavsiye ederiz.',
            },
            {
              name: 'Zeynep Kaya',
              company: 'Delta Co.',
              title: 'Harika Deneyim',
              description: 'Deneyimlerimiz çok olumlu. Çalışanlar çok ilgili ve yardımcı.',
            },
          ],
        }}
        referenceLogos={[
          {
            title: 'Apple',
            component: Icons.AppleLogo,
          },
          {
            title: 'Vercel',
            component: Icons.VercelLogo,
          },
          {
            title: 'Atlassian',
            component: Icons.AtlassianLogo,
          },
          {
            title: 'Anthropic',
            component: Icons.AnthropicLogo,
          },
          {
            title: 'Callstack',
            component: Icons.CallstackLogo,
          },
          {
            title: 'Gitlab',
            component: Icons.GitlabLogo,
          },
        ]}
      />
    </Section>
  );
}
