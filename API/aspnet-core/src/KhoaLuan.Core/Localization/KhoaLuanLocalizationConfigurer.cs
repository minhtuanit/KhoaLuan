using Abp.Configuration.Startup;
using Abp.Localization.Dictionaries;
using Abp.Localization.Dictionaries.Xml;
using Abp.Reflection.Extensions;

namespace KhoaLuan.Localization
{
    public static class KhoaLuanLocalizationConfigurer
    {
        public static void Configure(ILocalizationConfiguration localizationConfiguration)
        {
            localizationConfiguration.Sources.Add(
                new DictionaryBasedLocalizationSource(KhoaLuanConsts.LocalizationSourceName,
                    new XmlEmbeddedFileLocalizationDictionaryProvider(
                        typeof(KhoaLuanLocalizationConfigurer).GetAssembly(),
                        "KhoaLuan.Localization.SourceFiles"
                    )
                )
            );
        }
    }
}
