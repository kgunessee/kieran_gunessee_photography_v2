//The keys in the equipment objects are capitalised because they are used to display the category header on the equipment page.

export const astroEquipmentInfo = {
  Scope: {
    evostar72ED: {
      name: "Skywatcher Evostar 72ED",
      image: "/images/equipment/Skywatcher Evostar 72ED Telescope OTA.webp",
    },
    explorer130PDS: {
      name: "Skywatcher Explorer 130PDS",
      image: "/images/equipment/Skywatcher Explorer 130PDS Telescope OTA.webp",
    },
    GT71ii: {
      name: "William Optics GT71 II",
      image: "/images/equipment/William Optics GT71II Telescope OTA.webp",
    },
  },
  Mount: {
    heq5pro: {
      name: "Skywatcher HEQ5 Pro",
      image: "/images/equipment/Skywatcher HEQ5 Pro Mount.webp",
    },
  },
  Camera: {
    "533MCPRO": {
      name: "ZWO ASI 533MC Pro",
      image: "/images/equipment/ZWO ASI533MM_MC Pro.webp",
    },
    "533MMPRO": {
      name: "ZWO ASI 533MM Pro",
      image: "/images/equipment/ZWO ASI533MM_MC Pro.webp",
    },
  },
  Filters: {
    lExtreme: {
      name: "Optolong L-Extreme",
      image: "/images/equipment/Optolong L-Extreme Filter.webp",
    },
    lPro: {
      name: "Optolong L-Pro",
      image: "/images/equipment/Optolong L-Pro Filter.webp",
    },
    optolongLRGB: {
      name: "Optolong LRGB Filter Set",
      image: "/images/equipment/Optolong LRGB Filter Set.webp",
    },
    antliaEdge: {
      name: "Antlia 4.5nm Edge SHO",
      image: "/images/equipment/Antlia Edge 4.5nm SHO Filter Set.webp",
    },
  },
  "Guide Scope": {
    svbony60mm: {
      name: "SVBony 60mm Guidescope",
      image: "/images/equipment/SVBony 60mm Guidescope.webp",
    },
  },
  "Guide Camera": {
    "120mmMini": {
      name: "ZWO ASI 110MM Mini",
      image: "/images/equipment/ZWO ASI220MM Mini Guide Camera.webp",
    },
    "220mmMini": {
      name: "ZWO ASI 220MM Mini",
      image: "/images/equipment/ZWO ASI220MM Mini Guide Camera.webp",
    },
  },
  Focuser: {
    zwoEAF: {
      name: "ZWO EAF",
      image: "/images/equipment/ZWO EAF Automatic Focuser.webp",
    },
  },

  "Filter Wheel": {
    zwoEFW: {
      name: "ZWO EFW 8 x 1.25",
      image: "/images/equipment/ZWO EFW Electronic Filter Wheel.webp",
    },
  },
  "Image Capture": {
    asiairplus: {
      name: "ZWO ASI Air Plus",
      image: "/images/equipment/asiair.webp",
    },
  },
  Software: {
    affinity: {
      name: "Affinity Photo",
      image: "/images/equipment/Affinity Photo 2 Logo.webp",
    },
    pixinsight: {
      name: "Pixinsight",
      image: "/images/equipment/Pixinsight Logo.webp",
    },
  },
};

export const daytimeEquipmentInfo = {
  Camera: {
    D3300: {
      name: "Nikon D3300",
      image: "/images/equipment/Nikon D3300 DSLR Camera.webp",
    },
    D750: {
      name: "Nikon D750",
      image: "/images/equipment/Nikon D750 Full Frame DSLR Camera.webp",
    },
    Z7II: {
      name: "Nikon Z7II",
      image: "/images/equipment/Nikon Z7II.webp",
    },
  },

  Lens: {
    "Tokina 11-16mm": {
      name: "Tokina 11-16mm F/2.8 AT-X116 PRO DX II",
      image: "/images/equipment/Tokina 11-16mm F2.8 AT-X116 PRO DX II.webp",
    },
    "Tamron 24-70mm": {
      name: "Tamron 24-70 mm F2.8 VC USD",
      image: "/images/equipment/Tamron 24-70 mm F2.8 VC USD.webp",
    },
    "Nikon 50mm": {
      name: "Nikon AF-S Nikkor 50mm 1.8G",
      image: "/images/equipment/Nikon AF-S Nikkor 50mm 1.8G.webp",
    },
    "Nikon Z 24-70mm f4": {
      name: "Nikon Nikkor Z 24-70mm f/4 S",
      image: "/images/equipment/Nikon 24-70mm F4.webp",
    },
    "Samyang 14mm": {
      name: "Samyang 14mm F2.8 Nikon Z",
      image: "/images/equipment/Samyang 14mm F2.8 Nikon Z.webp",
    },
  },

  Tripod: {
    manfrotto: {
      name: "Manfrotto Element MKII",
      image: "/images/equipment/Manfrotto Element MKII Tripod.webp",
    },
  },
  Filters: {
    urth: {
      name: "Urth Magnetic 82mm Filter Set",
      image: "/images/equipment/Urth Filter Set.webp",
    },
  },
  Bag: {
    vanguardVeo: {
      name: "Vanguard VEO Active 46",
      image: "/images/equipment/Vanguard VEO Active 46.webp",
    },
  },
};

export const astroImageInfo = [
  {
    thumb:
      "/images/thumbnails/astrophotography/thumb_Elephants Trunk Nebula SHO.webp",
    fullRes:
      "/images/full_res/astrophotography/fs_Elephants Trunk Nebula SHO.webp",
    title: "The Elephants Trunk Nebula in SHO",
    catalogue: "IC 1396",
    captureDetails: {
      exposureTime: "180s",
      integration: "30hrs",
      darks: "20",
      flats: "20",
      darkFlats: "20",
      scope: astroEquipmentInfo.Scope.GT71ii.name,
      mount: astroEquipmentInfo.Mount.heq5pro.name,
      camera: astroEquipmentInfo.Camera["533MMPRO"].name,
      filters: astroEquipmentInfo.Filters.antliaEdge.name,
      imagingCapture: astroEquipmentInfo["Image Capture"].asiairplus.name,
      guidescope: astroEquipmentInfo["Guide Scope"].svbony60mm.name,
      guideCamera: astroEquipmentInfo["Guide Camera"]["220mmMini"].name,
      software: `${astroEquipmentInfo.Software.affinity.name} & ${astroEquipmentInfo.Software.pixinsight.name}`,
      imageDate: "04/10/2024",
    },
    description: "",
    keywords: ["nebula", "sho", "hargb", "narrowband", "100mm - 400mm", "mono"],
  },
  {
    thumb:
      "/images/thumbnails/astrophotography/thumb_ElephantsTrunkNebulaHOO.webp",
    fullRes:
      "/images/full_res/astrophotography/fs_ElephantsTrunkNebulaHOO.webp",
    title: "The Elephants Trunk Nebula in HOO",
    catalogue: "IC 1396",
    captureDetails: {
      exposureTime: "180s",
      integration: "13hrs",
      darks: "30",
      flats: "30",
      darkFlats: "30",
      scope: astroEquipmentInfo.Scope.GT71ii.name,
      mount: astroEquipmentInfo.Mount.heq5pro.name,
      camera: astroEquipmentInfo.Camera["533MMPRO"].name,
      filters: astroEquipmentInfo.Filters.antliaEdge.name,
      imagingCapture: astroEquipmentInfo["Image Capture"].asiairplus.name,
      guidescope: astroEquipmentInfo["Guide Scope"].svbony60mm.name,
      guideCamera: astroEquipmentInfo["Guide Camera"]["220mmMini"].name,
      software: `${astroEquipmentInfo.Software.affinity.name} & ${astroEquipmentInfo.Software.pixinsight.name}`,
      imageDate: "28/09/2024",
    },
    description: "",
    keywords: ["nebula", "hoo", "narrowband", "100mm - 400mm", "mono"],
  },
  {
    thumb: "/images/thumbnails/astrophotography/thumb_PelicanNebula.webp",
    fullRes: "/images/full_res/astrophotography/fs_PelicanNebula.webp",
    title: "The Pelican Nebula",
    catalogue: "IC 5070",
    captureDetails: {
      exposureTime: "180s",
      integration: "10hrs",
      darks: "30",
      flats: "30",
      darkFlats: "30",
      scope: astroEquipmentInfo.Scope.GT71ii.name,
      mount: astroEquipmentInfo.Mount.heq5pro.name,
      camera: astroEquipmentInfo.Camera["533MMPRO"].name,
      filters: astroEquipmentInfo.Filters.antliaEdge.name,
      imagingCapture: astroEquipmentInfo["Image Capture"].asiairplus.name,
      guidescope: astroEquipmentInfo["Guide Scope"].svbony60mm.name,
      guideCamera: astroEquipmentInfo["Guide Camera"]["220mmMini"].name,
      software: `${astroEquipmentInfo.Software.affinity.name} & ${astroEquipmentInfo.Software.pixinsight.name}`,
      imageDate: "13/08/2024",
    },
    description: "",
    keywords: ["nebula", "sho", "narrowband", "100mm - 400mm", "mono"],
  },
  {
    thumb: "/images/thumbnails/astrophotography/thumb_WR134.webp",
    fullRes: "/images/full_res/astrophotography/fs_WR134.webp",
    title: "Wolf-Rayet 134",
    catalogue: "WR134",
    captureDetails: {
      exposureTime: "180s",
      integration: "9hrs",
      darks: "60",
      flats: "60",
      darkFlats: "60",
      scope: astroEquipmentInfo.Scope.explorer130PDS.name,
      mount: astroEquipmentInfo.Mount.heq5pro.name,
      camera: astroEquipmentInfo.Camera["533MMPRO"].name,
      filters: astroEquipmentInfo.Filters.antliaEdge.name,
      imagingCapture: astroEquipmentInfo["Image Capture"].asiairplus.name,
      guidescope: astroEquipmentInfo["Guide Scope"].svbony60mm.name,
      guideCamera: astroEquipmentInfo["Guide Camera"]["220mmMini"].name,
      software: `${astroEquipmentInfo.Software.affinity.name} & ${astroEquipmentInfo.Software.pixinsight.name}`,
      imageDate: "06/17/2024",
    },
    description: "",
    keywords: ["nebula", "hoo", "hargb", "narrowband", "100mm - 400mm", "mono"],
  },
  {
    thumb: "/images/thumbnails/astrophotography/thumb_ComaGalaxyCluster.webp",
    fullRes: "/images/full_res/astrophotography/fs_ComaGalaxyCluster.webp",
    title: "The Coma Galaxy Cluster",
    catalogue: "Abell 1656",
    captureDetails: {
      exposureTime: "180s",
      integration: "5.5hrs",
      darks: "60",
      flats: "60",
      darkFlats: "60",
      scope: astroEquipmentInfo.Scope.explorer130PDS.name,
      mount: astroEquipmentInfo.Mount.heq5pro.name,
      camera: astroEquipmentInfo.Camera["533MMPRO"].name,
      filters: astroEquipmentInfo.Filters.optolongLRGB.name,
      imagingCapture: astroEquipmentInfo["Image Capture"].asiairplus.name,
      guidescope: astroEquipmentInfo["Guide Scope"].svbony60mm.name,
      guideCamera: astroEquipmentInfo["Guide Camera"]["220mmMini"].name,
      software: `${astroEquipmentInfo.Software.affinity.name} & ${astroEquipmentInfo.Software.pixinsight.name}`,
      imageDate: "22/05/2024",
    },
    description: "",
    keywords: [
      "galaxy",
      "stars & clusters",
      "lrgb",
      "broadband",
      "400mm - 700mm",
      "mono",
    ],
  },
  {
    thumb: "/images/thumbnails/astrophotography/thumb_M101May2024.webp",
    fullRes: "/images/full_res/astrophotography/fs_M101May2024.webp",
    title: "The Pinwheel Galaxy",
    catalogue: "M101",
    captureDetails: {
      exposureTime: "180s",
      integration: "6hrs",
      darks: "60",
      flats: "60",
      darkFlats: "60",
      scope: astroEquipmentInfo.Scope.explorer130PDS.name,
      mount: astroEquipmentInfo.Mount.heq5pro.name,
      camera: astroEquipmentInfo.Camera["533MMPRO"].name,
      filters: astroEquipmentInfo.Filters.optolongLRGB.name,
      imagingCapture: astroEquipmentInfo.Filters.antliaEdge.name,
      guidescope: astroEquipmentInfo["Guide Scope"].svbony60mm.name,
      guideCamera: astroEquipmentInfo["Guide Camera"]["220mmMini"].name,
      software: `${astroEquipmentInfo.Software.affinity.name} & ${astroEquipmentInfo.Software.pixinsight.name}`,
      imageDate: "23/05/2024",
    },
    description: "",
    keywords: ["galaxy", "lrgb ", "broadband", "400mm - 700mm", "mono"],
  },
  {
    thumb:
      "/images/thumbnails/astrophotography/thumb_HorseheadAndFlameNebula.webp",
    fullRes:
      "/images/full_res/astrophotography/fs_HorseheadAndFlameNebula.webp",
    title: "The Horsehead and Flame Nebula",
    catalogue: "IC 434 / NGC 2024",
    captureDetails: {
      exposureTime: "300s",
      integration: "14.5hrs",
      darks: "60",
      flats: "60",
      darkFlats: "60",
      scope: astroEquipmentInfo.Scope.GT71ii.name,
      mount: astroEquipmentInfo.Mount.heq5pro.name,
      camera: astroEquipmentInfo.Camera["533MMPRO"].name,
      filters: astroEquipmentInfo.Filters.antliaEdge.name,
      imagingCapture: astroEquipmentInfo["Image Capture"].asiairplus.name,
      guidescope: astroEquipmentInfo["Guide Scope"].svbony60mm.name,
      guideCamera: astroEquipmentInfo["Guide Camera"]["220mmMini"].name,
      software: `${astroEquipmentInfo.Software.affinity.name} & ${astroEquipmentInfo.Software.pixinsight.name}`,
      imageDate: "20/01/2024",
    },
    description: "",
    keywords: ["nebula", "hargb", "narrowband", "100mm - 400mm", "mono"],
  },
  {
    thumb: "/images/thumbnails/astrophotography/thumb_HeartNebula.webp",
    fullRes: "/images/full_res/astrophotography/fs_HeartNebula.webp",
    title: "The Heart Nebula",
    catalogue: "IC 1805",
    captureDetails: {
      exposureTime: "300s",
      integration: "8hrs",
      darks: "60",
      flats: "60",
      darkFlats: "60",
      scope: astroEquipmentInfo.Scope.explorer130PDS.name,
      mount: astroEquipmentInfo.Mount.heq5pro.name,
      camera: astroEquipmentInfo.Camera["533MCPRO"].name,
      filters: "Optolong L-Extreme & Optolong L-Pro",
      imagingCapture: astroEquipmentInfo.Filters.antliaEdge.name,
      guidescope: astroEquipmentInfo["Guide Scope"].svbony60mm.name,
      guideCamera: astroEquipmentInfo["Guide Camera"]["220mmMini"].name,
      software: `${astroEquipmentInfo.Software.affinity.name} & ${astroEquipmentInfo.Software.pixinsight.name}`,
      imageDate: "11/25/2023",
    },
    description: (
      <div>
        <p className="text-contentText">
          First light with my new ZWO ASI 533MM Pro camera, and my first mono
          image! <br />
          <br /> I&apos;ve finally jumped on to the mono bandwagon and I can see
          what all the fuss is about now. It&apos;s more work sure, but the
          extra detail and contrast is instantly noticeable in the image.
          <br />
          <br /> The Heart Nebula (IC 1805) was also one of the first images I
          took with the 533MC Pro when I first got it, and it&apos;s crazy to
          see the difference in image quality and processing skills compared to
          that!
        </p>
      </div>
    ),
    keywords: ["nebula", "sho", "narrowband", "100mm - 400mm", "mono"],
  },
  {
    thumb: "/images/thumbnails/astrophotography/thumb_AndromedaGalaxy.webp",
    fullRes: "/images/full_res/astrophotography/fs_AndromedaGalaxy.webp",
    title: "The Andromeda Galaxy",
    catalogue: "M31",
    captureDetails: {
      exposureTime: "180s",
      integration: "10hrs",
      darks: "100",
      flats: "100",
      darkFlats: "100",
      scope: astroEquipmentInfo.Scope.evostar72ED.name,
      mount: astroEquipmentInfo.Mount.heq5pro.name,
      camera: astroEquipmentInfo.Camera["533MCPRO"].name,
      filters: astroEquipmentInfo.Filters.lPro.name,
      imagingCapture: astroEquipmentInfo["Image Capture"].asiairplus.name,
      guidescope: astroEquipmentInfo["Guide Scope"].svbony60mm.name,
      guideCamera: astroEquipmentInfo["Guide Camera"]["120mmMini"].name,
      software: `${astroEquipmentInfo.Software.affinity.name} & ${astroEquipmentInfo.Software.pixinsight.name}`,
      imageDate: "10/01/2022",
    },
    description: (
      <div>
        <p className={`text-contentText`}>
          This image was taken over a few nights across a few weeks. <br />
          <br />
          The first capture session had around 7hrs of data, and an additional 3
          were added a few weeks after.
        </p>
      </div>
    ),
    keywords: ["galaxy", "broadband", "100mm - 400mm", "osc"],
  }, //10/01/2022
  {
    thumb: "/images/thumbnails/astrophotography/thumb_ThePleiades.webp",
    fullRes: "/images/full_res/astrophotography/fs_ThePleiades.webp",
    title: "The Pleiades",
    catalogue: "M45",
    captureDetails: {
      exposureTime: "180s",
      integration: "4hrs",
      darks: "100",
      flats: "100",
      bias: "100",
      scope: astroEquipmentInfo.Scope.evostar72ED.name,
      mount: astroEquipmentInfo.Mount.heq5pro.name,
      camera: astroEquipmentInfo.Camera["533MCPRO"].name,
      filters: astroEquipmentInfo.Filters.lPro.name,
      imagingCapture: "Astrophotography Tool",
      guidescope: astroEquipmentInfo["Guide Scope"].svbony60mm.name,
      guideCamera: astroEquipmentInfo["Guide Camera"]["120mmMini"].name,
      software: `${astroEquipmentInfo.Software.affinity.name} & ${astroEquipmentInfo.Software.pixinsight.name}`,
      imageDate: "03/12/2021",
    },
    description: "",
    keywords: ["nebula", "broadband", "100mm - 400mm", "osc"],
  }, //03/12/2021
  {
    thumb: "/images/thumbnails/astrophotography/thumb_GhostOfCassiopeia.webp",
    fullRes: "/images/full_res/astrophotography/fs_GhostOfCassiopeia.webp",
    title: "The Ghost of Cassiopeia",
    catalogue: "IC 63",
    captureDetails: {
      exposureTime: "180s",
      integration: "12.5hrs",
      darks: "60",
      flats: "60",
      darkFlats: "60",
      scope: astroEquipmentInfo.Scope.explorer130PDS.name,
      mount: astroEquipmentInfo.Mount.heq5pro.name,
      camera: astroEquipmentInfo.Camera["533MCPRO"].name,
      filters: "Optolong L-Extreme & Optolong L-Pro",
      imagingCapture: astroEquipmentInfo["Image Capture"].asiairplus.name,
      guidescope: astroEquipmentInfo["Guide Scope"].svbony60mm.name,
      guideCamera: astroEquipmentInfo["Guide Camera"]["220mmMini"].name,
      software: `${astroEquipmentInfo.Software.affinity.name} & ${astroEquipmentInfo.Software.pixinsight.name}`,
      imageDate: "02/10/2022",
    },
    description: (
      <div>
        <p className={`text-contentText`}>
          This is IC63, or more commonly known as the Ghost of Cassiopeia. This
          is quite a challenging target from my location as it&apos;s quite
          faint and is both a broadband and narrowband target.
          <br />
          <br />I captured this over 2 nights using both the Optolong L-Pro for
          the broadband data, and L-Extreme for the narrowband (Ha), and
          combined them in Pixinsight.
        </p>
      </div>
    ),
    keywords: [
      "nebula",
      "broadband",
      "narrowband",
      "hargb",
      "400mm - 700mm",
      "osc",
    ],
  }, //02/10/2022
  {
    thumb: "/images/thumbnails/astrophotography/thumb_RosetteNebula.webp",
    fullRes: "/images/full_res/astrophotography/fs_RosetteNebula.webp",
    title: "The Rosette Nebula",
    catalogue: "NGC 2244",
    captureDetails: {
      exposureTime: "300s",
      integration: "12hrs",
      darks: "60",
      flats: "60",
      darkFlats: "60",
      scope: astroEquipmentInfo.Scope.GT71ii.name,
      mount: astroEquipmentInfo.Mount.heq5pro.name,
      camera: astroEquipmentInfo.Camera["533MCPRO"].name,
      filters: astroEquipmentInfo.Filters.lExtreme.name,
      imagingCapture: astroEquipmentInfo["Image Capture"].asiairplus.name,
      guidescope: astroEquipmentInfo["Guide Scope"].svbony60mm.name,
      guideCamera: astroEquipmentInfo["Guide Camera"]["220mmMini"].name,
      software: `${astroEquipmentInfo.Software.affinity.name} & ${astroEquipmentInfo.Software.pixinsight.name}`,
      imageDate: "16/12/2022",
    },
    description: (
      <div>
        <p className={`text-contentText`}>
          This is my latest image of the Rosette Nebula & star cluster within
          (NGC2244). I&apos;ve been waiting all year to image this and got my
          chance this week with a run of clear nights! <br />
          <br />
          It was also my first image processed with BlurXTerminator, which is
          beyond amazing! I&apos;m really happy with how this turned out.
        </p>
      </div>
    ),
    keywords: ["nebula", "narrowband", "100mm - 400mm", "osc"],
  }, //16/12/2022
  {
    thumb: "/images/thumbnails/astrophotography/thumb_LouiesStar.webp",
    fullRes: "/images/full_res/astrophotography/fs_LouiesStar.webp",
    title: "Louie's Star",
    catalogue: "1695225 Gemini / DSS2",
    captureDetails: {
      exposureTime: "60s",
      integration: "1hr",
      darks: "60",
      flats: "60",
      darkFlats: "60",
      scope: astroEquipmentInfo.Scope.explorer130PDS.name,
      mount: astroEquipmentInfo.Mount.heq5pro.name,
      camera: astroEquipmentInfo.Camera["533MCPRO"].name,
      filters: astroEquipmentInfo.Filters.lPro.name,
      imagingCapture: astroEquipmentInfo["Image Capture"].asiairplus.name,
      guidescope: astroEquipmentInfo["Guide Scope"].svbony60mm.name,
      guideCamera: astroEquipmentInfo["Guide Camera"]["220mmMini"].name,
      software: `${astroEquipmentInfo.Software.affinity.name} & ${astroEquipmentInfo.Software.pixinsight.name}`,
      imageDate: "27/12/2022",
    },
    description: (
      <div>
        <p className={`text-contentText`}>
          What you&apos;re looking at is my very own star, purchased by my
          lovely wife for Christmas through nameastar.
          <br />
          <br />
          The star is located in the constellation Gemini and is now registered
          and named after our cat, Louie 😂 or more specifically after his
          nickname &apos;El Louile&apos; - don&apos;t ask how he got that name!
          <br />
          <br />
          Louie, your name is now (literally) written in the stars!
        </p>
      </div>
    ),
    keywords: ["stars & clusters", "broadband", "400mm - 700mm", "osc"],
  }, //27/12/2023
  {
    thumb: "/images/thumbnails/astrophotography/thumb_CrescentNebula.webp",
    fullRes: "/images/full_res/astrophotography/fs_CrescentNebula.webp",
    title: "The Crescent Nebula",
    catalogue: "NGC 6888",
    captureDetails: {
      exposureTime: "180s",
      integration: "12.5hrs",
      darks: "60",
      flats: "60",
      darkFlats: "60",
      scope: astroEquipmentInfo.Scope.explorer130PDS.name,
      mount: astroEquipmentInfo.Mount.heq5pro.name,
      camera: astroEquipmentInfo.Camera["533MCPRO"].name,
      filters: astroEquipmentInfo.Filters.lExtreme.name,
      imagingCapture: astroEquipmentInfo["Image Capture"].asiairplus.name,
      guidescope: astroEquipmentInfo["Guide Scope"].svbony60mm.name,
      guideCamera: astroEquipmentInfo["Guide Camera"]["220mmMini"].name,
      software: `${astroEquipmentInfo.Software.affinity.name} & ${astroEquipmentInfo.Software.pixinsight.name}`,
      imageDate: "04/06/2023",
    },
    description: "",
    keywords: ["nebula", "narrowband", "400mm - 700mm", "osc"],
  }, //04/06/2023
  {
    thumb: "/images/thumbnails/astrophotography/thumb_BodesAndCigarGalaxy.webp",
    fullRes: "/images/full_res/astrophotography/fs_BodesAndCigarGalaxy.webp",
    title: "Bodes & Cigar Galaxy",
    catalogue: "M81 & M82",
    captureDetails: {
      exposureTime: "60s",
      integration: "13hrs",
      darks: "60",
      flats: "60",
      darkFlats: "60",
      scope: astroEquipmentInfo.Scope.explorer130PDS.name,
      mount: astroEquipmentInfo.Mount.heq5pro.name,
      camera: astroEquipmentInfo.Camera["533MCPRO"].name,
      filters: `${astroEquipmentInfo.Filters.lExtreme.name} & ${astroEquipmentInfo.Filters.lPro.name}`,
      imagingCapture: astroEquipmentInfo["Image Capture"].asiairplus.name,
      guidescope: astroEquipmentInfo["Guide Scope"].svbony60mm.name,
      guideCamera: astroEquipmentInfo["Guide Camera"]["220mmMini"].name,
      software: `${astroEquipmentInfo.Software.affinity.name} & ${astroEquipmentInfo.Software.pixinsight.name}`,
      imageDate: "05/04/2023",
    },
    description: (
      <div>
        <p className={`text-contentText`}>
          After what felt like forever I finally had a run of clear nights this
          week so made the most of it.
          <br />
          <br /> I decided to image M81 and M82 again with my 130PDS as it had a
          longer focal length than the 72ED I previously used.
          <br />
          <br /> In total I managed to get about 10hrs of broadband and 3 hours
          of L-Extreme data for the Ha regions. I would have liked to get more
          but the weather has unfortunately gone back to normal (rain and
          clouds)!
        </p>
      </div>
    ),
    keywords: [
      "galaxy",
      "broadband",
      "narrowband",
      "hargb",
      "400mm - 700mm",
      "osc",
    ],
  }, //05/04/2023
  {
    thumb: "/images/thumbnails/astrophotography/thumb_MTheWhirlpoolGalaxy.webp",
    fullRes: "/images/full_res/astrophotography/fs_MTheWhirlpoolGalaxy.webp",
    title: "The Whirlpool Galaxy",
    catalogue: "M51",
    captureDetails: {
      exposureTime: "180s",
      integration: "12.4hrs",
      darks: "60",
      flats: "60",
      darkFlats: "60",
      scope: astroEquipmentInfo.Scope.explorer130PDS.name,
      mount: astroEquipmentInfo.Mount.heq5pro.name,
      camera: astroEquipmentInfo.Camera["533MCPRO"].name,
      filters: astroEquipmentInfo.Filters.lPro.name,
      imagingCapture: astroEquipmentInfo["Image Capture"].asiairplus.name,
      guidescope: astroEquipmentInfo["Guide Scope"].svbony60mm.name,
      guideCamera: astroEquipmentInfo["Guide Camera"]["220mmMini"].name,
      software: `${astroEquipmentInfo.Software.affinity.name} & ${astroEquipmentInfo.Software.pixinsight.name}`,
      imageDate: "08/04/2023",
    },
    description: "",
    keywords: ["galaxy", "broadband", "400mm - 700mm", "osc"],
  }, //08/04/2023
  {
    thumb: "/images/thumbnails/astrophotography/thumb_TadpolesNebula.webp",
    fullRes: "/images/full_res/astrophotography/fs_TadpolesNebula.webp",
    title: "The Tadpoles Nebula",
    catalogue: "IC 410",
    captureDetails: {
      exposureTime: "300s",
      integration: "11.5hrs",
      darks: "60",
      flats: "60",
      darkFlats: "60",
      scope: astroEquipmentInfo.Scope.GT71ii.name,
      mount: astroEquipmentInfo.Mount.heq5pro.name,
      camera: astroEquipmentInfo.Camera["533MCPRO"].name,
      filters: `${astroEquipmentInfo.Filters.lExtreme.name} & ${astroEquipmentInfo.Filters.lPro.name}`,
      imagingCapture: astroEquipmentInfo["Image Capture"].asiairplus.name,
      guidescope: astroEquipmentInfo["Guide Scope"].svbony60mm.name,
      guideCamera: astroEquipmentInfo["Guide Camera"]["220mmMini"].name,
      software: `${astroEquipmentInfo.Software.affinity.name} & ${astroEquipmentInfo.Software.pixinsight.name}`,
      imageDate: "14/02/2023",
    },
    description: (
      <div>
        <p className={`text-contentText`}>
          This is the Tadpoles Nebula in the constellation Auriga (IC410). I
          started to capture data on this nebula back in December, in between
          other targets and ended up with about 5 hours of data. I added another
          6.5 hours last night and this is the result!
          <br />
          <br />
          This is probably the longest I&apos;ve spent acquiring data on a
          single target so far (2 months), as when the moon is out it sits slap
          bang in the middle of Auriga from my position, so I&apos;ve had to
          wait for clear AND moonless nights to finish this!
        </p>
      </div>
    ),
    keywords: ["nebula", "narrowband", "100mm - 400mm", "osc"],
  }, //14/02/2023
  {
    thumb: "/images/thumbnails/astrophotography/thumb_OrionNebula.webp",
    fullRes: "/images/full_res/astrophotography/fs_OrionNebula.webp",
    title: "The Orion Nebula",
    catalogue: "M42",
    captureDetails: {
      exposureTime: "30s / 180s / 300s",
      integration: "15hrs",
      darks: "60",
      flats: "60",
      darkFlats: "60",
      scope: astroEquipmentInfo.Scope.GT71ii.name,
      mount: astroEquipmentInfo.Mount.heq5pro.name,
      camera: astroEquipmentInfo.Camera["533MCPRO"].name,
      filters: "Optolong L-Pro & L-Extreme",
      imagingCapture: astroEquipmentInfo["Image Capture"].asiairplus.name,
      guidescope: astroEquipmentInfo["Guide Scope"].svbony60mm.name,
      guideCamera: astroEquipmentInfo["Guide Camera"]["220mmMini"].name,
      software: `${astroEquipmentInfo.Software.affinity.name} & ${astroEquipmentInfo.Software.pixinsight.name}`,
      imageDate: "27/01/2023",
    },
    description: (
      <div>
        <p className={`text-contentText`}>
          This is this year&apos;s capture of the Orion and Running Man Nebula
          (M42). It&apos;ll probably become an annual thing!
          <br />
          <br />
          I&apos;m very happy with how the final image turned out. I&apos;m
          actually using less data than my last attempt, but the data itself was
          better and my processing has improved a lot, which has resulted in a
          much better image in my opinion.
          <br />
          <br />I blended broadband and narrowband data at different exposure
          times for the core and star detail, which has made a big difference
          when compared to narrowband only as in my last attempt.
        </p>
      </div>
    ),
    keywords: ["nebula", "narrowband", "100mm - 400mm", "osc"],
  }, //27/01/2023
  {
    thumb: "/images/thumbnails/astrophotography/thumb_TriangulumGalaxy.webp",
    fullRes: "/images/full_res/astrophotography/fs_TriangulumGalaxy.webp",
    title: "The Triangulum Galaxy",
    catalogue: "M33",
    captureDetails: {
      exposureTime: "180s",
      integration: "8.5hrs",
      darks: "100",
      flats: "100",
      darkFlats: "100",
      scope: `${astroEquipmentInfo.Scope.evostar72ED.name} & ${astroEquipmentInfo.Scope.explorer130PDS.name}`,
      mount: astroEquipmentInfo.Mount.heq5pro.name,
      camera: astroEquipmentInfo.Camera["533MCPRO"].name,
      filters: `${astroEquipmentInfo.Filters.lExtreme.name} & ${astroEquipmentInfo.Filters.lPro.name}`,
      imagingCapture: astroEquipmentInfo["Image Capture"].asiairplus.name,
      guidescope: astroEquipmentInfo["Guide Scope"].svbony60mm.name,
      guideCamera: astroEquipmentInfo["Guide Camera"]["120mmMini"].name,
      software: `${astroEquipmentInfo.Software.affinity.name} & ${astroEquipmentInfo.Software.pixinsight.name}`,
      imageDate: "10/01/2023",
    },
    description: (
      <div>
        <p className={`text-contentText`}>
          This is a blend of old and new data, taken with the 72ED and 130PDS.
        </p>
      </div>
    ),
    keywords: [
      "galaxy",
      "broadband",
      "narrowband",
      "hargb",
      "400mm - 700mm",
      "osc",
    ],
  }, //10/01/2023
  {
    thumb: "/images/thumbnails/astrophotography/thumb_IrisNebula.webp",
    fullRes: "/images/full_res/astrophotography/fs_IrisNebula.webp",
    title: "The Iris Nebula",
    catalogue: "NGC 7023",
    captureDetails: {
      exposureTime: "180s",
      integration: "8hrs",
      darks: "60",
      flats: "60",
      darkFlats: "60",
      scope: astroEquipmentInfo.Scope.evostar72ED.name,
      mount: astroEquipmentInfo.Mount.heq5pro.name,
      camera: astroEquipmentInfo.Camera["533MCPRO"].name,
      filters: astroEquipmentInfo.Filters.lPro.name,
      imagingCapture: astroEquipmentInfo["Image Capture"].asiairplus.name,
      guidescope: astroEquipmentInfo["Guide Scope"].svbony60mm.name,
      guideCamera: astroEquipmentInfo["Guide Camera"]["220mmMini"].name,
      software: `${astroEquipmentInfo.Software.affinity.name} & ${astroEquipmentInfo.Software.pixinsight.name}`,
      imageDate: "11/12/2021",
    },
    description: (
      <div>
        <p className={`text-contentText`}>
          This image was taken over a few nights across a few weeks. <br />
          <br />
          The first capture session had around 7hrs of data, and an additional 3
          were added a few weeks after.
        </p>
      </div>
    ),
    keywords: ["nebula", "broadband", "400mm - 700mm", "osc"],
  }, //11/12/2021
  {
    thumb: "/images/thumbnails/astrophotography/thumb_HerculesCluster.webp",
    fullRes: "/images/full_res/astrophotography/fs_HerculesCluster.webp",
    title: "Hercules Star Cluster",
    catalogue: "M13",
    captureDetails: {
      exposureTime: "30s",
      integration: "50mins",
      darks: "60",
      flats: "60",
      darkFlats: "60",
      scope: astroEquipmentInfo.Scope.GT71ii.name,
      mount: astroEquipmentInfo.Mount.heq5pro.name,
      camera: astroEquipmentInfo.Camera["533MCPRO"].name,
      filters: astroEquipmentInfo.Filters.lPro.name,
      imagingCapture: astroEquipmentInfo["Image Capture"].asiairplus.name,
      guidescope: astroEquipmentInfo["Guide Scope"].svbony60mm.name,
      guideCamera: astroEquipmentInfo["Guide Camera"]["120mmMini"].name,
      software: `${astroEquipmentInfo.Software.affinity.name} & ${astroEquipmentInfo.Software.pixinsight.name}`,
      imageDate: "10/05/2022",
    },
    description: (
      <div>
        <p className={`text-contentText`}>
          This image was taken over a few nights across a few weeks. <br />
          <br />
          The first capture session had around 7hrs of data, and an additional 3
          were added a few weeks after.
        </p>
      </div>
    ),
    keywords: ["stars & clusters", "broadband", "400mm - 700mm", "osc"],
  }, //10/05/2022

  {
    thumb: "/images/thumbnails/astrophotography/thumb_QuestionMarkNebula.webp",
    fullRes: "/images/full_res/astrophotography/fs_QuestionMarkNebula.webp",
    title: "A Section of the Question Mark Nebula",
    catalogue: "NGC 7822",
    captureDetails: {
      exposureTime: "300s",
      integration: "18hrs",
      darks: "60",
      flats: "60",
      darkFlats: "60",
      scope: astroEquipmentInfo.Scope.GT71ii.name,
      mount: astroEquipmentInfo.Mount.heq5pro.name,
      camera: astroEquipmentInfo.Camera["533MCPRO"].name,
      filters: astroEquipmentInfo.Filters.lExtreme.name,
      imagingCapture: astroEquipmentInfo["Image Capture"].asiairplus.name,
      guidescope: astroEquipmentInfo["Guide Scope"].svbony60mm.name,
      guideCamera: astroEquipmentInfo["Guide Camera"]["120mmMini"].name,
      software: `${astroEquipmentInfo.Software.affinity.name} & ${astroEquipmentInfo.Software.pixinsight.name}`,
      imageDate: "19/03/2022",
    },
    description: (
      <div>
        <p className={`text-contentText`}>
          This image was taken over a number of nights when we had a rare week
          of clear skies! <br /> <br />
          When processing in Pixinsight, I was playing around with the curves
          values for the individual colour channels and accidentally created
          this orange-blue colour palette which I really like, so I stuck with
          it to produce this image.
        </p>
      </div>
    ),
    keywords: ["nebula", "narrowband", "100mm - 400mm", "osc"],
  }, //19/03/2022
  {
    thumb: "/images/thumbnails/astrophotography/thumb_VeilNebulaMosaic.webp",
    fullRes: "/images/full_res/astrophotography/fs_VeilNebulaMosaic.webp",
    title: "The Cygnus Loop",
    catalogue: "SH2-103",
    captureDetails: {
      exposureTime: "300s",
      integration: "4.5hrs per panel / 18hrs Total",
      darks: "60",
      flats: "60",
      darkFlats: "60",
      scope: astroEquipmentInfo.Scope.GT71ii.name,
      mount: astroEquipmentInfo.Mount.heq5pro.name,
      camera: astroEquipmentInfo.Camera["533MCPRO"].name,
      filters: astroEquipmentInfo.Filters.lExtreme.name,
      imagingCapture: astroEquipmentInfo["Image Capture"].asiairplus.name,
      guidescope: astroEquipmentInfo["Guide Scope"].svbony60mm.name,
      guideCamera: astroEquipmentInfo["Guide Camera"]["120mmMini"].name,
      software: `${astroEquipmentInfo.Software.affinity.name} & ${astroEquipmentInfo.Software.pixinsight.name}`,
      imageDate: "June 2022",
    },
    description: (
      <div>
        <p className={`text-contentText`}>
          This is a 4-panel mosaic of the Cygnus Loop, contaning the Eastern &
          Western Veil Nebula, Pickerings Triangle and more. It was captured
          during the month of June 2022 with around 4.5hrs worth of data for
          each panel.
        </p>
      </div>
    ),
    keywords: ["nebula", "narrowband", "100mm - 400mm", "osc"],
  }, //June 2022
  {
    thumb:
      "/images/thumbnails/astrophotography/thumb_SadrAndCrescentNebula.webp",
    fullRes: "/images/full_res/astrophotography/fs_SadrAndCrescentNebula.webp",
    title: "Sadr Region & Crescent Nebula",
    catalogue: "SH2-103",
    captureDetails: {
      exposureTime: "300s / 180s",
      integration: "5hrs per panel / 10hrs Total",
      darks: "60",
      flats: "60",
      darkFlats: "60",
      scope: astroEquipmentInfo.Scope.GT71ii.name,
      mount: astroEquipmentInfo.Mount.heq5pro.name,
      camera: astroEquipmentInfo.Camera["533MCPRO"].name,
      filters: astroEquipmentInfo.Filters.lExtreme.name,
      imagingCapture: astroEquipmentInfo["Image Capture"].asiairplus.name,
      guidescope: astroEquipmentInfo["Guide Scope"].svbony60mm.name,
      guideCamera: astroEquipmentInfo["Guide Camera"]["120mmMini"].name,
      software: `${astroEquipmentInfo.Software.affinity.name} & ${astroEquipmentInfo.Software.pixinsight.name}`,
      imageDate: "09/06/2022",
    },
    description: "",
    keywords: ["nebula", "narrowband", "100mm - 400mm", "osc"],
  }, //09/06/2022

  {
    thumb:
      "/images/thumbnails/astrophotography/thumb_NorthAmericaAndPelicanNebula.webp",
    fullRes:
      "/images/full_res/astrophotography/fs_NorthAmericaAndPelicanNebula.webp",
    title: "The North America & Pelican Nebula",
    catalogue: "NGC 7000 / IC 5070",
    captureDetails: {
      exposureTime: "300s",
      integration: "5hrs per panel / 20hrs Total",
      darks: "60",
      flats: "60",
      darkFlats: "60",
      scope: astroEquipmentInfo.Scope.GT71ii.name,
      mount: astroEquipmentInfo.Mount.heq5pro.name,
      camera: astroEquipmentInfo.Camera["533MCPRO"].name,
      filters: astroEquipmentInfo.Filters.lExtreme.name,
      imagingCapture: astroEquipmentInfo["Image Capture"].asiairplus.name,
      guidescope: astroEquipmentInfo["Guide Scope"].svbony60mm.name,
      guideCamera: astroEquipmentInfo["Guide Camera"]["120mmMini"].name,
      software: `${astroEquipmentInfo.Software.affinity.name} & ${astroEquipmentInfo.Software.pixinsight.name}`,
      imageDate: "11/08/2022",
    },
    description: (
      <div>
        <p className={`text-contentText`}>
          This is the North America and Pelican nebula in the constellation
          Cygnus. The North America nebula was the first nebula I ever took a
          photo of so it&apos;s good to revisit it!
          <br />
          <br />
          This is a 4 panel mosaic taken throughout August. Each panel is
          between 5-6 hours of data each, and was processed on HOO.
        </p>
      </div>
    ),
    keywords: ["nebula", "narrowband", "100mm - 400mm", "osc"],
  }, //11/08/2022
  {
    thumb: "/images/thumbnails/astrophotography/thumb_LionNebula.webp",
    fullRes: "/images/full_res/astrophotography/fs_LionNebula.webp",
    title: "The Lion Nebula",
    catalogue: "SH2-132",
    captureDetails: {
      exposureTime: "300s",
      integration: "14.5hrs",
      darks: "60",
      flats: "60",
      darkFlats: "60",
      scope: astroEquipmentInfo.Scope.GT71ii.name,
      mount: astroEquipmentInfo.Mount.heq5pro.name,
      camera: astroEquipmentInfo.Camera["533MCPRO"].name,
      filters: astroEquipmentInfo.Filters.lExtreme.name,
      imagingCapture: astroEquipmentInfo["Image Capture"].asiairplus.name,
      guidescope: astroEquipmentInfo["Guide Scope"].svbony60mm.name,
      guideCamera: astroEquipmentInfo["Guide Camera"]["120mmMini"].name,
      software: `${astroEquipmentInfo.Software.affinity.name} & ${astroEquipmentInfo.Software.pixinsight.name}`,
      imageDate: "13/08/2022",
    },
    description: (
      <div>
        <p className={`text-contentText`}>
          This image was taken over 3 consecutive nights. <br />
          <br />
          It is quite a faint target and light pollution in my area meant
          gathering quite a bit of data to bring out as much detail as possible.
        </p>
      </div>
    ),
    keywords: ["nebula", "narrowband", "100mm - 400mm", "osc"],
  }, //13/08/2022
  {
    thumb: "/images/thumbnails/astrophotography/thumb_EasternVeilNebula.webp",
    fullRes: "/images/full_res/astrophotography/fs_EasternVeilNebula.webp",
    title: "The Eastern Veil Nebula",
    catalogue: "NGC 6992",
    captureDetails: {
      exposureTime: "180s",
      integration: "5.5hrs",
      darks: "60",
      flats: "60",
      darkFlats: "60",
      scope: astroEquipmentInfo.Scope.explorer130PDS.name,
      mount: astroEquipmentInfo.Mount.heq5pro.name,
      camera: astroEquipmentInfo.Camera["533MCPRO"].name,
      filters: astroEquipmentInfo.Filters.lExtreme.name,
      imagingCapture: astroEquipmentInfo["Image Capture"].asiairplus.name,
      guidescope: astroEquipmentInfo["Guide Scope"].svbony60mm.name,
      guideCamera: astroEquipmentInfo["Guide Camera"]["220mmMini"].name,
      software: `${astroEquipmentInfo.Software.affinity.name} & ${astroEquipmentInfo.Software.pixinsight.name}`,
      imageDate: "17/09/2022",
    },
    description: (
      <div>
        <p className={`text-contentText`}>
          This image was taken in a single night in September, and was first
          light for my Skywatcher 130PDS telescope.
        </p>
      </div>
    ),
    keywords: ["nebula", "narrowband", "400mm - 700mm", "osc"],
  }, //17/09/2022
  {
    thumb: "/images/thumbnails/astrophotography/thumb_PacmanNebulaNatural.webp",
    fullRes: "/images/full_res/astrophotography/fs_PacmanNebulaNatural.webp",
    title: "The Pacman Nebula",
    catalogue: "NGC 281",
    captureDetails: {
      exposureTime: "300s",
      integration: "6hrs",
      darks: "60",
      flats: "60",
      darkFlats: "60",
      scope: "Skywatcher Evostar 72ED & William Optics GT71 II",
      mount: astroEquipmentInfo.Mount.heq5pro.name,
      camera: astroEquipmentInfo.Camera["533MCPRO"].name,
      filters: astroEquipmentInfo.Filters.lExtreme.name,
      imagingCapture: astroEquipmentInfo["Image Capture"].asiairplus.name,
      guidescope: astroEquipmentInfo["Guide Scope"].svbony60mm.name,
      guideCamera: astroEquipmentInfo["Guide Camera"]["120mmMini"].name,
      software: `${astroEquipmentInfo.Software.affinity.name} & ${astroEquipmentInfo.Software.pixinsight.name}`,
      imageDate: "20/08/2022",
    },
    description: (
      <div>
        <p className={`text-contentText`}>
          I initially captured this back in Jan &apos;22, but only had around
          2hrs worth of data to work with. I&apos;ve combined this with 4 more
          hrs of new data that was taken in August &apos;22, and this is the
          result.
        </p>
      </div>
    ),
    keywords: ["nebula", "narrowband", "100mm - 400mm", "osc"],
  }, //20/08/2022
  {
    thumb: "/images/thumbnails/astrophotography/thumb_TheTulipNebula.webp",
    fullRes: "/images/full_res/astrophotography/fs_TheTulipNebula.webp",
    title: "The Tulip Nebula",
    catalogue: "SH2-101",
    captureDetails: {
      exposureTime: "180s",
      integration: "6hrs",
      darks: "60",
      flats: "60",
      darkFlats: "60",
      scope: astroEquipmentInfo.Scope.GT71ii.name,
      mount: astroEquipmentInfo.Mount.heq5pro.name,
      camera: astroEquipmentInfo.Camera["533MCPRO"].name,
      filters: astroEquipmentInfo.Filters.lExtreme.name,
      imagingCapture: astroEquipmentInfo["Image Capture"].asiairplus.name,
      guidescope: astroEquipmentInfo["Guide Scope"].svbony60mm.name,
      guideCamera: astroEquipmentInfo["Guide Camera"]["120mmMini"].name,
      software: `${astroEquipmentInfo.Software.affinity.name} & ${astroEquipmentInfo.Software.pixinsight.name}`,
      imageDate: "12/07/2022",
    },
    description: "",
    keywords: ["nebula", "narrowband", "100mm - 400mm", "osc"],
  }, //12/07/2022

  {
    thumb: "/images/thumbnails/astrophotography/thumb_SmallClusterNebula.webp",
    fullRes: "/images/full_res/astrophotography/fs_SmallClusterNebula.webp",
    title: "The Small Cluster Nebula",
    catalogue: "NGC 7129",
    captureDetails: {
      exposureTime: "180s",
      integration: "6.5hrs",
      darks: "60",
      flats: "60",
      darkFlats: "60",
      scope: astroEquipmentInfo.Scope.explorer130PDS.name,
      mount: astroEquipmentInfo.Mount.heq5pro.name,
      camera: astroEquipmentInfo.Camera["533MCPRO"].name,
      filters: astroEquipmentInfo.Filters.lPro.name,
      imagingCapture: astroEquipmentInfo["Image Capture"].asiairplus.name,
      guidescope: astroEquipmentInfo["Guide Scope"].svbony60mm.name,
      guideCamera: astroEquipmentInfo["Guide Camera"]["220mmMini"].name,
      software: `${astroEquipmentInfo.Software.affinity.name} & ${astroEquipmentInfo.Software.pixinsight.name}`,
      imageDate: "25/09/2022",
    },
    description: "",
    keywords: [
      "nebula",
      "stars & clusters",
      "broadband",
      "400mm - 700mm",
      "osc",
    ],
  }, //25/09/2022
  {
    thumb: "/images/thumbnails/astrophotography/thumb_CaveNebula.webp",
    fullRes: "/images/full_res/astrophotography/fs_CaveNebula.webp",
    title: "The Cave Nebula",
    catalogue: "SH2-155",
    captureDetails: {
      exposureTime: "180s",
      integration: "13hrs",
      darks: "60",
      flats: "60",
      darkFlats: "60",
      scope: astroEquipmentInfo.Scope.explorer130PDS.name,
      mount: astroEquipmentInfo.Mount.heq5pro.name,
      camera: astroEquipmentInfo.Camera["533MCPRO"].name,
      filters: astroEquipmentInfo.Filters.lExtreme.name,
      imagingCapture: astroEquipmentInfo["Image Capture"].asiairplus.name,
      guidescope: astroEquipmentInfo["Guide Scope"].svbony60mm.name,
      guideCamera: astroEquipmentInfo["Guide Camera"]["220mmMini"].name,
      software: `${astroEquipmentInfo.Software.affinity.name} & ${astroEquipmentInfo.Software.pixinsight.name}`,
      imageDate: "08/10/2022",
    },
    description: "",
    keywords: ["nebula", "narrowband", "400mm - 700mm", "osc"],
  }, //08/10/2022

  {
    thumb:
      "/images/thumbnails/astrophotography/thumb_ChristmasTreeCluster.webp",
    fullRes: "/images/full_res/astrophotography/fs_ChristmasTreeCluster.webp",
    title: "The Christmas Tree Cluster",
    catalogue: "NGC 2264",
    captureDetails: {
      exposureTime: "300s",
      integration: "4hrs",
      darks: "60",
      flats: "60",
      darkFlats: "60",
      scope: astroEquipmentInfo.Scope.GT71ii.name,
      mount: astroEquipmentInfo.Mount.heq5pro.name,
      camera: astroEquipmentInfo.Camera["533MCPRO"].name,
      filters: astroEquipmentInfo.Filters.lExtreme.name,
      imagingCapture: astroEquipmentInfo["Image Capture"].asiairplus.name,
      guidescope: astroEquipmentInfo["Guide Scope"].svbony60mm.name,
      guideCamera: astroEquipmentInfo["Guide Camera"]["220mmMini"].name,
      software: `${astroEquipmentInfo.Software.affinity.name} & ${astroEquipmentInfo.Software.pixinsight.name}`,
      imageDate: "25/12/2022",
    },
    description: "",
    keywords: ["nebula", "narrowband", "100mm - 400mm", "osc"],
  }, //25/12/2022

  {
    thumb:
      "/images/thumbnails/astrophotography/thumb_CasperTheFriendlyGhostNebula.webp",
    fullRes:
      "/images/full_res/astrophotography/fs_CasperTheFriendlyGhostNebula.webp",
    title: "Casper the Friendly Ghost Nebula",
    catalogue: "M78",
    captureDetails: {
      exposureTime: "180s",
      integration: "5hrs",
      darks: "60",
      flats: "60",
      darkFlats: "60",
      scope: astroEquipmentInfo.Scope.explorer130PDS.name,
      mount: astroEquipmentInfo.Mount.heq5pro.name,
      camera: astroEquipmentInfo.Camera["533MCPRO"].name,
      filters: astroEquipmentInfo.Filters.lPro.name,
      imagingCapture: astroEquipmentInfo["Image Capture"].asiairplus.name,
      guidescope: astroEquipmentInfo["Guide Scope"].svbony60mm.name,
      guideCamera: astroEquipmentInfo["Guide Camera"]["220mmMini"].name,
      software: `${astroEquipmentInfo.Software.affinity.name} & ${astroEquipmentInfo.Software.pixinsight.name}`,
      imageDate: "14/01/2023",
    },
    description: (
      <div>
        <p className={`text-contentText`}>
          This is M78 in the constellation Orion. <br />
          <br />I planned to get a lot of data on this target but only managed
          to get around 5hrs. Unfortunately the weather has been awful the last
          few weeks and I want to capture another nebula before Orion
          disappears, so I&apos;m calling it a day on M78 for now.
        </p>
      </div>
    ),
    keywords: ["nebula", "broadband", "400mm - 700mm", "osc"],
  }, //14/01/2023
  {
    thumb: "/images/thumbnails/astrophotography/thumb_JellyfishNebula.webp",
    fullRes: "/images/full_res/astrophotography/fs_JellyfishNebula.webp",
    title: "The Jellyfish Nebula",
    catalogue: "IC 443",
    captureDetails: {
      exposureTime: "180s / 300s",
      integration: "15hrs",
      darks: "60",
      flats: "60",
      darkFlats: "60",
      scope: astroEquipmentInfo.Scope.GT71ii.name,
      mount: astroEquipmentInfo.Mount.heq5pro.name,
      camera: astroEquipmentInfo.Camera["533MCPRO"].name,
      filters: `${astroEquipmentInfo.Filters.lExtreme.name} & ${astroEquipmentInfo.Filters.lPro.name}`,
      imagingCapture: astroEquipmentInfo["Image Capture"].asiairplus.name,
      guidescope: astroEquipmentInfo["Guide Scope"].svbony60mm.name,
      guideCamera: astroEquipmentInfo["Guide Camera"]["220mmMini"].name,
      software: `${astroEquipmentInfo.Software.affinity.name} & ${astroEquipmentInfo.Software.pixinsight.name}`,
      imageDate: "22/01/2023",
    },
    description: (
      <div>
        <p className={`text-contentText`}>
          This is the Jellyfish Nebula (IC443). I have been wanting to capture
          this for a while so I took the opportunity this week while we had a
          run of clear nights to get it.
          <br />
          <br />
          This is around 15grs of data in both RGB and Narrowband using the
          L-Pro and L-Extreme filters.
        </p>
      </div>
    ),
    keywords: ["nebula", "narrowband", "100mm - 400mm", "osc"],
  }, //22/01/2023
  {
    thumb: "/images/thumbnails/astrophotography/thumb_CometZTF.webp",
    fullRes: "/images/full_res/astrophotography/fs_CometZTF.webp",
    title: "Comet E3 2022 ZTF",
    catalogue: "E3 2022 ZTF",
    captureDetails: {
      exposureTime: "60s",
      integration: "1hr",
      darks: "60",
      flats: "60",
      darkFlats: "60",
      scope: astroEquipmentInfo.Scope.GT71ii.name,
      mount: astroEquipmentInfo.Mount.heq5pro.name,
      camera: astroEquipmentInfo.Camera["533MCPRO"].name,
      filters: astroEquipmentInfo.Filters.lPro.name,
      imagingCapture: astroEquipmentInfo["Image Capture"].asiairplus.name,
      guidescope: astroEquipmentInfo["Guide Scope"].svbony60mm.name,
      guideCamera: astroEquipmentInfo["Guide Camera"]["220mmMini"].name,
      software: `${astroEquipmentInfo.Software.affinity.name} & ${astroEquipmentInfo.Software.pixinsight.name}`,
      imageDate: "25/01/2023",
    },
    description: (
      <div>
        <p className={`text-contentText`}>
          This comet has been doing the rounds recently so I thought I&apos;d
          have a pop at it myself!
          <br />
          <br />
          It&apos;s called Comet E3 2022 (ZTF), and was only discovered last
          year.
          <br />
          <br />
          It orbits every 50&apos;000 years making this a literal once in a
          lifetime opportunity, and also means it would have last been seen by
          our early ancestors! This is 60x 60s exposures taken on the 23rd Jan.
        </p>
      </div>
    ),
    keywords: ["comets", "broadband", "400mm - 700mm", "osc"],
  }, //25/01/2023

  {
    thumb:
      "/images/thumbnails/astrophotography/thumb_PinwheelGalaxySupernova.webp",
    fullRes:
      "/images/full_res/astrophotography/fs_PinwheelGalaxySupernova.webp",
    title: "SN2023IXF Supernova in the Pinwheel Galaxy",
    catalogue: "M101",
    captureDetails: {
      exposureTime: "180s",
      integration: "2.45hrs",
      darks: "60",
      flats: "60",
      darkFlats: "60",
      scope: astroEquipmentInfo.Scope.explorer130PDS.name,
      mount: astroEquipmentInfo.Mount.heq5pro.name,
      camera: astroEquipmentInfo.Camera["533MCPRO"].name,
      filters: astroEquipmentInfo.Filters.lPro.name,
      imagingCapture: astroEquipmentInfo["Image Capture"].asiairplus.name,
      guidescope: astroEquipmentInfo["Guide Scope"].svbony60mm.name,
      guideCamera: astroEquipmentInfo["Guide Camera"]["220mmMini"].name,
      software: `${astroEquipmentInfo.Software.affinity.name} & ${astroEquipmentInfo.Software.pixinsight.name}`,
      imageDate: "22/05/2023",
    },
    description: (
      <div>
        <p className={`text-contentText`}>
          21 million lightyears ago, a star went supernova and exploded in M101,
          the Pinwheel Galaxy.
          <br />
          <br />
          The light emitted from that supernova has travelled those 21 million
          years to end its journey on my camera sensor, resulting in this image
          - SN2023IXF Supernovae are so bright they outshine the galaxy they
          reside in, making this look like a star in our own galaxy despite the
          fact it&apos;s trillions of miles away!
        </p>
      </div>
    ),
    keywords: ["galaxy", "broadband", "400mm - 700mm", "osc"],
  }, //22/05/2023

  {
    thumb: "/images/thumbnails/astrophotography/thumb_PropellerNebula.webp",
    fullRes: "/images/full_res/astrophotography/fs_PropellerNebula.webp",
    title: "The Propeller Nebula",
    catalogue: "DWB 111/119",
    captureDetails: {
      exposureTime: "300s",
      integration: "11.5hrs",
      darks: "60",
      flats: "60",
      darkFlats: "60",
      scope: astroEquipmentInfo.Scope.GT71ii.name,
      mount: astroEquipmentInfo.Mount.heq5pro.name,
      camera: astroEquipmentInfo.Camera["533MCPRO"].name,
      filters: astroEquipmentInfo.Filters.lExtreme.name,
      imagingCapture: astroEquipmentInfo["Image Capture"].asiairplus.name,
      guidescope: astroEquipmentInfo["Guide Scope"].svbony60mm.name,
      guideCamera: astroEquipmentInfo["Guide Camera"]["220mmMini"].name,
      software: `${astroEquipmentInfo.Software.affinity.name} & ${astroEquipmentInfo.Software.pixinsight.name}`,
      imageDate: "18/06/2023",
    },
    description: "",
    keywords: ["nebula", "narrowband", "100mm - 400mm", "osc"],
  }, //18/06/2023
  {
    thumb: "/images/thumbnails/astrophotography/thumb_SoulNebula.webp",
    fullRes: "/images/full_res/astrophotography/fs_SoulNebula.webp",
    title: "The Soul Nebula",
    catalogue: "IC 1848",
    captureDetails: {
      exposureTime: "300s",
      integration: "9hrs",
      darks: "100",
      flats: "100",
      darkFlats: "100",
      scope: astroEquipmentInfo.Scope.GT71ii.name,
      mount: astroEquipmentInfo.Mount.heq5pro.name,
      camera: astroEquipmentInfo.Camera["533MCPRO"].name,
      filters: astroEquipmentInfo.Filters.lExtreme.name,
      imagingCapture: astroEquipmentInfo["Image Capture"].asiairplus.name,
      guidescope: astroEquipmentInfo["Guide Scope"].svbony60mm.name,
      guideCamera: astroEquipmentInfo["Guide Camera"]["120mmMini"].name,
      software: `${astroEquipmentInfo.Software.affinity.name} & ${astroEquipmentInfo.Software.pixinsight.name}`,
      imageDate: "09/03/2022",
    },
    description: "",
    keywords: ["nebula", "narrowband", "100mm - 400mm", "osc"],
  }, //09/03/2022
];

export const waterImageInfo = [
  {
    thumb: "/images/thumbnails/water/thumb_Iceland_5.webp",
    fullRes: "/images/full_res/water/fs_Iceland_5.webp",
    title: "Svöðufoss & River",
    camera: daytimeEquipmentInfo.Camera.D3300.name,
    lens: daytimeEquipmentInfo.Lens["Tokina 11-16mm"].name,
    imageDate: "04/11/2023",
    location: "Iceland",
    iso: "1600",
    aperture: "8.0",
    shutterSpeed: "2.5",
    mapLocation: "https://maps.app.goo.gl/sSEebE2urW5AaWrp7",
    // keyWords: "iceland, waterfall, river, wide angle,",
    keywords: ["iceland", "waterfall", "river", "wide angle"],
  },

  {
    thumb: "/images/thumbnails/water/thumb_Iceland_7.webp",
    fullRes: "/images/full_res/water/fs_Iceland_7.webp",
    title: "Svöðufoss",
    camera: daytimeEquipmentInfo.Camera.D3300.name,
    lens: daytimeEquipmentInfo.Lens["Tokina 11-16mm"].name,
    imageDate: "04/11/2023",
    location: "Iceland",
    iso: "3200",
    aperture: "8.0",
    shutterSpeed: "1.6",
    mapLocation: "https://maps.app.goo.gl/sSEebE2urW5AaWrp7",
    keywords: ["iceland", "waterfall", "river", "wide angle"],
  },
  {
    thumb: "/images/thumbnails/water/thumb_Iceland_6.webp",
    fullRes: "/images/full_res/water/fs_Iceland_6.webp",
    title: "Svöðufoss from afar",
    camera: daytimeEquipmentInfo.Camera.D3300.name,
    lens: daytimeEquipmentInfo.Lens["Tokina 11-16mm"].name,
    imageDate: "04/11/2023",
    location: "Iceland",
    iso: "1600",
    aperture: "8.0",
    shutterSpeed: "3.0",
    mapLocation: "https://maps.app.goo.gl/sSEebE2urW5AaWrp7",
    keywords: ["iceland", "waterfall", "river", "wide angle"],
  },

  {
    thumb: "/images/thumbnails/water/thumb_Iceland_20.webp",
    fullRes: "/images/full_res/water/fs_Iceland_20.webp",
    title: "Skógafoss",
    camera: daytimeEquipmentInfo.Camera.D3300.name,
    lens: daytimeEquipmentInfo.Lens["Tokina 11-16mm"].name,
    imageDate: "06/11/2023",
    location: "Iceland",
    iso: "100",
    aperture: "8.0",
    shutterSpeed: "1/3",
    mapLocation: "https://maps.app.goo.gl/yKpovwmnafsVFspX7",
    keywords: ["iceland", "waterfall", "wide angle"],
  },
  {
    thumb: "/images/thumbnails/water/thumb_Iceland_18.webp",
    fullRes: "/images/full_res/water/fs_Iceland_18.webp",
    title: "Gullfoss Falls",
    camera: daytimeEquipmentInfo.Camera.D3300.name,
    lens: daytimeEquipmentInfo.Lens["Tokina 11-16mm"].name,
    imageDate: "05/11/2023",
    location: "Iceland",
    iso: "100",
    aperture: "8.0",
    shutterSpeed: "2.5",
    mapLocation: "https://maps.app.goo.gl/WEHRmtvAJFA5mvbT9",
    keywords: ["iceland", "waterfall", "river", "wide angle"],
  },
  {
    thumb: "/images/thumbnails/water/thumb_Iceland_13.webp",
    fullRes: "/images/full_res/water/fs_Iceland_13.webp",
    title: "Kirkjufellsfossar",
    camera: daytimeEquipmentInfo.Camera.D3300.name,
    lens: daytimeEquipmentInfo.Lens["Tokina 11-16mm"].name,
    imageDate: "04/11/2023",
    location: "Iceland",
    iso: "1600",
    aperture: "8.0",
    shutterSpeed: "0.5",
    mapLocation: "https://maps.app.goo.gl/AYb3pdHziwoqsNJz5",
    keywords: ["iceland", "waterfall", "wide angle"],
  },
  {
    thumb: "/images/thumbnails/water/thumb_Iceland_12.webp",
    fullRes: "/images/full_res/water/fs_Iceland_12.webp",
    title: "Kirkjufell & Kirkjufellsfossar",
    camera: daytimeEquipmentInfo.Camera.D3300.name,
    lens: daytimeEquipmentInfo.Lens["Tokina 11-16mm"].name,
    imageDate: "04/11/2023",
    location: "Iceland",
    iso: "100",
    aperture: "11.0",
    shutterSpeed: "0.3",
    mapLocation: "https://maps.app.goo.gl/kahiXFeGEczY8CwQ8",
    keywords: ["iceland", "waterfall", "mountain", "wide angle"],
  },
  {
    thumb: "/images/thumbnails/water/thumb_Iceland_10.webp",
    fullRes: "/images/full_res/water/fs_Iceland_10.webp",
    title: "Kerlingarfoss",
    camera: daytimeEquipmentInfo.Camera.D3300.name,
    lens: daytimeEquipmentInfo.Lens["Tokina 11-16mm"].name,
    imageDate: "04/11/2023",
    location: "Iceland",
    iso: "100",
    aperture: "11.0",
    shutterSpeed: "0.3",
    mapLocation: "https://maps.app.goo.gl/kahiXFeGEczY8CwQ8",
    keywords: ["iceland", "waterfall"],
  },
  {
    thumb: "/images/thumbnails/water/thumb_Iceland_9.webp",
    fullRes: "/images/full_res/water/fs_Iceland_9.webp",
    title: "Kerlingarfoss wide-portrait",
    camera: daytimeEquipmentInfo.Camera.D3300.name,
    lens: daytimeEquipmentInfo.Lens["Tokina 11-16mm"].name,
    imageDate: "04/11/2023",
    location: "Iceland",
    iso: "800",
    aperture: "8.0",
    shutterSpeed: "0.5",
    mapLocation: "https://maps.app.goo.gl/kahiXFeGEczY8CwQ8",
    keywords: ["iceland", "waterfall", "wide angle"],
  },
  {
    thumb: "/images/thumbnails/water/thumb_Iceland_8.webp",
    fullRes: "/images/full_res/water/fs_Iceland_8.webp",
    title: "Kerlingarfoss wide-angle",
    camera: daytimeEquipmentInfo.Camera.D3300.name,
    lens: daytimeEquipmentInfo.Lens["Tokina 11-16mm"].name,
    imageDate: "04/11/2023",
    location: "Iceland",
    iso: "800",
    aperture: "8.0",
    shutterSpeed: "0.5",
    mapLocation: "https://maps.app.goo.gl/kahiXFeGEczY8CwQ8",
    keywords: ["iceland", "waterfall", "wide angle"],
  },
  {
    thumb: "/images/thumbnails/water/thumb_Kerlingarfoss & River.webp",
    fullRes: "/images/full_res/water/fs_Kerlingarfoss & River.webp",
    title: "Kerlingarfoss & River",
    camera: daytimeEquipmentInfo.Camera.D3300.name,
    lens: daytimeEquipmentInfo.Lens["Tokina 11-16mm"].name,
    imageDate: "04/11/2023",
    location: "Iceland",
    iso: "100",
    aperture: "8.0",
    shutterSpeed: "3.0",
    mapLocation: "https://maps.app.goo.gl/kahiXFeGEczY8CwQ8",
    keywords: ["iceland", "waterfall", "wide angle"],
  },

  {
    thumb: "/images/thumbnails/water/thumb_The_first_cascade.webp",
    fullRes: "/images/full_res/water/fs_The_first_cascade.webp",
    title: "The First Cascade",
    camera: daytimeEquipmentInfo.Camera.Z7II.name,
    lens: daytimeEquipmentInfo.Lens["Nikon Z 24-70mm f4"].name,
    imageDate: "07/08/2024",
    location: "Bernard's Acre, Dartmoor",
    iso: "100",
    aperture: "10.0",
    shutterSpeed: "1/6",
    mapLocation: "https://maps.app.goo.gl/88rLSAy9HjvWKv2b7",
    keywords: ["devon", "uk", "waterfall", "river", "wide angle"],
  },
  {
    thumb: "/images/thumbnails/water/thumb_Looking_Upstream.webp",
    fullRes: "/images/full_res/water/fs_Looking_Upstream.webp",
    title: "Looking Upstream",
    camera: daytimeEquipmentInfo.Camera.Z7II.name,
    lens: daytimeEquipmentInfo.Lens["Nikon Z 24-70mm f4"].name,
    imageDate: "07/08/2024",
    location: "Bernard's Acre, Dartmoor",
    iso: "100",
    aperture: "10.0",
    shutterSpeed: "1/6",
    mapLocation: "https://maps.app.goo.gl/88rLSAy9HjvWKv2b7",
    keywords: ["devon", "uk", "waterfall", "river", "wide angle"],
  },
];

export const landscapeImageInfo = [
  {
    thumb: "/images/thumbnails/landscape/thumb_Standing at the End.webp",
    fullRes: "/images/full_res/landscape/fs_Standing at the End.webp",
    title: "Standing at the End",
    camera: daytimeEquipmentInfo.Camera.Z7II.name,
    lens: daytimeEquipmentInfo.Lens["Nikon Z 24-70mm f4"].name,
    imageDate: "04/11/2023",
    location: "Monks Kirby, Rugby",
    iso: "500",
    aperture: "8.0",
    shutterSpeed: "1/60",
    mapLocation: "https://maps.app.goo.gl/yenzTTbf5gUmWFbz8",
    keywords: ["uk", "midlands", "minimalist", "wide angle"],
  },
  {
    thumb: "/images/thumbnails/landscape/thumb_A Tree in Fog.webp",
    fullRes: "/images/full_res/landscape/fs_A Tree in Fog.webp",
    title: "A Tree in Fog",
    camera: daytimeEquipmentInfo.Camera.Z7II.name,
    lens: daytimeEquipmentInfo.Lens["Nikon Z 24-70mm f4"].name,
    imageDate: "04/11/2023",
    location: "Monks Kirby, Rugby",
    iso: "1250",
    aperture: "8.0",
    shutterSpeed: "1/30",
    mapLocation: "https://maps.app.goo.gl/762oPAseXEBG4a1z7",
    keywords: ["uk", "midlands", "atmospheric", "wide angle"],
  },
  {
    thumb: "/images/thumbnails/landscape/thumb_Iceland_17.webp",
    fullRes: "/images/full_res/landscape/fs_Iceland_17.webp",
    title: "Kirkjufell",
    camera: daytimeEquipmentInfo.Camera.D3300.name,
    lens: daytimeEquipmentInfo.Lens["Tokina 11-16mm"].name,
    imageDate: "04/11/2023",
    location: "Iceland",
    iso: "400",
    aperture: "8.0",
    shutterSpeed: "1/13",
    mapLocation: "https://maps.app.goo.gl/AYb3pdHziwoqsNJz5",
    keywords: ["iceland", "mountains", "hills", "wide angle"],
  },
  {
    thumb: "/images/thumbnails/landscape/thumb_Iceland_15.webp",
    fullRes: "/images/full_res/landscape/fs_Iceland_15.webp",
    title: "Kirkjufell & River",
    camera: daytimeEquipmentInfo.Camera.D3300.name,
    lens: daytimeEquipmentInfo.Lens["Tokina 11-16mm"].name,
    imageDate: "04/11/2023",
    location: "Iceland",
    iso: "400",
    aperture: "8.0",
    shutterSpeed: "1/200",
    mapLocation: "https://maps.app.goo.gl/AYb3pdHziwoqsNJz5",
    keywords: ["iceland", "mountains", "hills", "wide angle"],
  },
  {
    thumb: "/images/thumbnails/landscape/thumb_House Opposite Kirkjufell.webp",
    fullRes: "/images/full_res/landscape/fs_House Opposite Kirkjufell.webp",
    title: "A House Opposite Kirkjufell",
    camera: daytimeEquipmentInfo.Camera.D3300.name,
    lens: daytimeEquipmentInfo.Lens["Tokina 11-16mm"].name,
    imageDate: "04/11/2023",
    location: "Iceland",
    iso: "800",
    aperture: "8.0",
    shutterSpeed: "1/200",
    mapLocation: "https://maps.app.goo.gl/KPZmmTDEJwmsd6CJA",
    keywords: ["iceland", "mountains", "hills", "atmospheric", "wide angle"],
  },
  {
    thumb: "/images/thumbnails/landscape/thumb_Iceland_11.webp",
    fullRes: "/images/full_res/landscape/fs_Iceland_11.webp",
    title: "Kirkjufell Across the Sea",
    camera: daytimeEquipmentInfo.Camera.D3300.name,
    lens: daytimeEquipmentInfo.Lens["Tokina 11-16mm"].name,
    imageDate: "04/11/2023",
    location: "Iceland",
    iso: "100",
    aperture: "8.0",
    shutterSpeed: "1/6",
    mapLocation: "https://maps.app.goo.gl/KPZmmTDEJwmsd6CJA",
    keywords: ["iceland", "mountains", "hills", "wide angle"],
  },
  {
    thumb: "/images/thumbnails/landscape/thumb_Iceland_3.webp",
    fullRes: "/images/full_res/landscape/fs_Iceland_3.webp",
    title: "View from the top of Saxhóll Crater",
    camera: daytimeEquipmentInfo.Camera.D3300.name,
    lens: daytimeEquipmentInfo.Lens["Tokina 11-16mm"].name,
    imageDate: "03/11/2023",
    location: "Iceland",
    iso: "800",
    aperture: "8.0",
    shutterSpeed: "1/125",
    mapLocation: "https://maps.app.goo.gl/dFug6g8FoofHRXXR6",
    keywords: ["iceland", "mountains", "hills", "wide angle"],
  },
  {
    thumb: "/images/thumbnails/landscape/thumb_The_Misty_Mountain.webp",
    fullRes: "/images/full_res/landscape/fs_The_Misty_Mountain.webp",
    title: "The Misty Mountaintop",
    camera: daytimeEquipmentInfo.Camera.D3300.name,
    lens: daytimeEquipmentInfo.Lens["Tokina 11-16mm"].name,
    imageDate: "02/11/2023",
    location: "Iceland",
    iso: "200",
    aperture: "9.0",
    shutterSpeed: "1/250",
    mapLocation: "https://maps.app.goo.gl/qmnd5eXBHvMCsGps6",
    keywords: ["iceland", "mountains", "hills", "wide angle"],
  },
  {
    thumb: "/images/thumbnails/landscape/thumb_Road_To_The_Mountain.webp",
    fullRes: "/images/full_res/landscape/fs_Road_To_The_Mountain.webp",
    title: "The Road to the Mountain",
    camera: daytimeEquipmentInfo.Camera.D3300.name,
    lens: daytimeEquipmentInfo.Lens["Tokina 11-16mm"].name,
    imageDate: "02/11/2023",
    location: "Iceland",
    iso: "200",
    aperture: "9.0",
    shutterSpeed: "1/250",
    mapLocation: "https://maps.app.goo.gl/MpxydhG2NKj4J3Dd8",
    keywords: ["iceland", "mountains", "hills", "wide angle"],
  },
  {
    thumb: "/images/thumbnails/landscape/thumb_Iceland_2.webp",
    fullRes: "/images/full_res/landscape/fs_Iceland_2.webp",
    title: "The Black Church of Búðir",
    camera: daytimeEquipmentInfo.Camera.D3300.name,
    lens: daytimeEquipmentInfo.Lens["Tokina 11-16mm"].name,
    imageDate: "03/11/2023",
    location: "Iceland",
    iso: "800",
    aperture: "9.0",
    shutterSpeed: "1/250",
    mapLocation: "https://maps.app.goo.gl/qJHbcCZEAUf4Jyw4A",
    keywords: ["iceland", "black & white"],
  },
  {
    thumb: "/images/thumbnails/landscape/thumb_Tenerife_01.webp",
    fullRes: "/images/full_res/landscape/fs_Tenerife_01.png",
    title: "Rock formation in the Tenerife Desert",
    camera: daytimeEquipmentInfo.Camera.D3300.name,
    lens: daytimeEquipmentInfo.Lens["Tokina 11-16mm"].name,
    imageDate: "21/05/2019",
    location: "Parque Nacional del Teide, Tenerife",
    iso: "800",
    aperture: "8.0",
    shutterSpeed: "1/2500",
    mapLocation: "https://maps.app.goo.gl/HiBxvcLMmABLHmN88",
    keywords: ["lanzarote"],
  },
];

export const woodlandImageInfo = [
  {
    thumb: "/images/thumbnails/woodland/thumb_Waterfall_with_a_view.webp",
    fullRes: "/images/full_res/woodland/fs_Waterfall_with_a_view.webp",
    title: "Waterfall with a View",
    camera: daytimeEquipmentInfo.Camera.Z7II.name,
    lens: daytimeEquipmentInfo.Lens["Nikon Z 24-70mm f4"].name,
    imageDate: "26/08/2024",
    location: "Padley Gorge, The Peak District",
    iso: "80",
    aperture: "10.0",
    shutterSpeed: "1/6",
    mapLocation: "https://maps.app.goo.gl/MBUnwMSeTUVSpCxK8",
    keywords: ["uk", "peak district", "summer", "wide angle"],
  },
  {
    thumb: "/images/thumbnails/woodland/thumb_The_Log_Walk.webp",
    fullRes: "/images/full_res/woodland/fs_The_Log_Walk.webp",
    title: "The Log Walk",
    camera: daytimeEquipmentInfo.Camera.Z7II.name,
    lens: daytimeEquipmentInfo.Lens["Nikon Z 24-70mm f4"].name,
    imageDate: "06/08/2024",
    location: "Bernard's Acre, Dartmoor",
    iso: "400",
    aperture: "8.0",
    shutterSpeed: "1/60",
    mapLocation: "https://maps.app.goo.gl/rwr6LKXbPyfCpSkg9",
    keywords: ["uk", "devon", "summer", "wide angle"],
  },
  {
    thumb: "/images/thumbnails/woodland/thumb_Down_to_the_River.webp",
    fullRes: "/images/full_res/woodland/fs_Down_to_the_River.webp",
    title: "Down to the River",
    camera: daytimeEquipmentInfo.Camera.Z7II.name,
    lens: daytimeEquipmentInfo.Lens["Nikon Z 24-70mm f4"].name,
    imageDate: "06/08/2024",
    location: "Bernard's Acre, Dartmoor",
    iso: "400",
    aperture: "8.0",
    shutterSpeed: "1/15",
    mapLocation: "https://maps.app.goo.gl/rwr6LKXbPyfCpSkg9",
    keywords: ["uk", "devon", "summer", "wide angle"],
  },
  {
    thumb: "/images/thumbnails/woodland/thumb_Teardrop.webp",
    fullRes: "/images/full_res/woodland/fs_Teardrop.webp",
    title: "Teardrop",
    camera: daytimeEquipmentInfo.Camera.D750.name,
    lens: daytimeEquipmentInfo.Lens["Tamron 24-70mm"].name,
    imageDate: "02/06/2024",
    location: "Hay Wood, Warwick",
    iso: "6400",
    aperture: "5.0",
    shutterSpeed: "1/80",
    mapLocation: "https://maps.app.goo.gl/S5hQgSA1id3EP8AE8",
    keywords: ["uk", "midlands", "focused subject", "summer", "wide angle"],
  },
  {
    thumb: "/images/thumbnails/woodland/thumb_Support.webp",
    fullRes: "/images/full_res/woodland/fs_Support.webp",
    title: "Support",
    camera: daytimeEquipmentInfo.Camera.D750.name,
    lens: daytimeEquipmentInfo.Lens["Tamron 24-70mm"].name,
    imageDate: "02/06/2024",
    location: "Hay Wood, Warwick",
    iso: "6400",
    aperture: "9.0",
    shutterSpeed: "1/160",
    mapLocation: "https://maps.app.goo.gl/9NWj47k8phr9f8n78",
    keywords: ["uk", "midlands", "summer", "wide angle"],
  },
  {
    thumb: "/images/thumbnails/woodland/thumb_Standing in the Sun.webp",
    fullRes: "/images/full_res/woodland/fs_Standing in the Sun.webp",
    title: "Standing in the Sun",
    camera: daytimeEquipmentInfo.Camera.D750.name,
    lens: daytimeEquipmentInfo.Lens["Tamron 24-70mm"].name,
    imageDate: "02/06/2024",
    location: "Monks Park Wood, Atherstone",
    iso: "6400",
    aperture: "16.0",
    shutterSpeed: "1/50",
    mapLocation: "https://maps.app.goo.gl/w2cPEVrQWjnGd1Vc7",
    keywords: ["uk", "midlands", "summer", "wide angle"],
  },
  {
    thumb: "/images/thumbnails/woodland/thumb_Fall in suspense.webp",
    fullRes: "/images/full_res/woodland/fs_Fall in suspense.webp",
    title: "Fall in suspense",
    camera: daytimeEquipmentInfo.Camera.D750.name,
    lens: daytimeEquipmentInfo.Lens["Tamron 24-70mm"].name,
    imageDate: "27/05/2024",
    location: "Monks Park Wood, Atherstone",
    iso: "1600",
    aperture: "2.8",
    shutterSpeed: "1/200",
    mapLocation: "https://maps.app.goo.gl/bZuBfZXhnLFFK4DM8",
    keywords: ["uk", "midlands", "focused subject", "summer"],
  },
  {
    thumb: "/images/thumbnails/woodland/thumb_Entwined.webp",
    fullRes: "/images/full_res/woodland/fs_Entwined.webp",
    title: "Entwined",
    camera: daytimeEquipmentInfo.Camera.D750.name,
    lens: daytimeEquipmentInfo.Lens["Tamron 24-70mm"].name,
    imageDate: "27/05/2024",
    location: "Monks Park Wood, Atherstone",
    iso: "6400",
    aperture: "4.0",
    shutterSpeed: "1/200",
    mapLocation: "https://maps.app.goo.gl/bZuBfZXhnLFFK4DM8",
    keywords: ["uk", "midlands", "focused subject", "summer"],
  },
];
