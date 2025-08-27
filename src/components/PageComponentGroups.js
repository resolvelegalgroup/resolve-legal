import React from "react"

import HeroOne from "./PageComponents/HeroOne"
import ImageByContent from "./PageComponents/ImageByContent"
import ContentBlockOne from "./PageComponents/ContentBlockOne"
import ThreeColumnsContent from "./PageComponents/ThreeColumnsContent"
import SocialMediaIcons from "./PageComponents/SocialMediaIcons"
import Testimonials from "./PageComponents/Testimonials"
import DidYouKnow from "./PageComponents/DidYouKnow"
import LinkBoxes from "./PageComponents/LinkBoxes"
import CalloutAction from "./PageComponents/CalloutAction"
import TitleNoImage from "./PageComponents/TitleNoImage"
import TitleOne from "./PageComponents/TitleOne"
import TitleTwo from "./PageComponents/TitleTwo"
import TitleThree from "./PageComponents/TitleThree"
import TitleFour from "./PageComponents/TitleFour"
import TitleSimpleContent from "./PageComponents/TitleSimpleContent"
import HeroPage from "./PageComponents/HeroPage"
import ImageSimpleContent from "./PageComponents/ImageSimpleContent"
import Logos from "./PageComponents/Logos"
import WysiwygImages from "./PageComponents/WysiwygImages"
import Directory from "./PageComponents/Directory"
import ImageLinks from "./PageComponents/ImageLinks"
import WysiwygSection from "./PageComponents/WysiwygSection"
import BlockItems from "./PageComponents/BlockItems"
import TeamMembers from "./PageComponents/TeamMembers"
import FeaturedEvents from "./PageComponents/FeaturedEvents"
import EventsList from "./PageComponents/EventsList"
import ArticlesList from "./PageComponents/ArticlesList"
import LunchLearnForm from "./PageComponents/LunchLearnForm"
import ContactForm from "./PageComponents/ContactForm"
import ClientSupportForm from "./PageComponents/ClientSupportForm"
import PhotoGallery from "./PageComponents/PhotoGallery"
import Podcast from "./PageComponents/Podcast"
import WysiwygGrid from "./PageComponents/WysiwygGrid"

const PageComponentGroups = props => {
  const { components } = props
  const allPageComponents =
    components?.acfMainTemplateFields?.pageComponents?.length > 0 ? (
      <>
        {components?.acfMainTemplateFields?.pageComponents.map(
          (component, index) => {
            switch (component?.fieldGroupName) {
              case "Page_Acfmaintemplatefields_PageComponents_HeroOne":
                return <HeroOne key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_ImageByContent":
                return <ImageByContent key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_ContentBlockOne":
                return <ContentBlockOne key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_ThreeColumnsContent":
                return <ThreeColumnsContent key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_SocialMediaIcons":
                return <SocialMediaIcons key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_Testimonials":
                return <Testimonials key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_DidYouKnow":
                return <DidYouKnow key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_LinkBoxes":
                return <LinkBoxes key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_CalloutAction":
                return <CalloutAction key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_TitleOne":
                return <TitleOne key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_TitleTwo":
                return <TitleTwo key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_TitleThree":
                return <TitleThree key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_TitleFour":
                return <TitleFour key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_TitleSimpleContent":
                return (
                  <TitleSimpleContent
                    key={index}
                    pageStyles={props.pageStyles}
                    data={component}
                  />
                )

              case "Page_Acfmaintemplatefields_PageComponents_HeroPage":
                return <HeroPage key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_ImageSimpleContent":
                return <ImageSimpleContent key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_Logos":
                return <Logos key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_WysiwygImages":
                return <WysiwygImages key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_Directory":
                return <Directory key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_ImageLinks":
                return <ImageLinks key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_WysiwygSection":
                return <WysiwygSection key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_BlockItems":
                return <BlockItems key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_TeamMembers":
                return <TeamMembers key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_TitleNoImage":
                return <TitleNoImage key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_FeaturedEvents":
                return <FeaturedEvents key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_EventsList":
                return <EventsList key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_ResourceArticles":
                return <ArticlesList key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_LunchLearnForm":
                return <LunchLearnForm key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_ContactForm":
                return <ContactForm key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_SupportForm":
                return <ClientSupportForm key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_PhotoGallery":
                return <PhotoGallery key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_Podcast":
                return <Podcast key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_WysiwygGrid":
                return <WysiwygGrid key={index} data={component} />

              default:
                return (
                  <p>Cannot find this component {component.fieldGroupName}</p>
                )
            }
          }
        )}
      </>
    ) : (
      <p>This page has no content</p>
    )

  return <>{allPageComponents}</>
}

export default PageComponentGroups
