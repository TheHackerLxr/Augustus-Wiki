import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
    site: 'https://augustusclient.github.io/Augustus-Wiki/',
    base: '/Augustus-Wiki',
    integrations: [
        starlight({
            title: 'Augustus Wiki',
            tableOfContents: {
                minHeadingLevel: 1,
                maxHeadingLevel: 6,
            },
            sidebar: [
                { slug: 'intro/welcome'},
                {
                    label: 'Basic',
                    items: [
                        { slug: 'intro/packets'},
                        { slug: 'intro/goodtoknowthings'},
                        { slug: 'intro/commands'},
                        { slug: 'intro/commonerrors'},
                        {
                            label: 'AntiCheats ',
                            items: [
                                { slug: 'intro/basicinfooverac'},
                                { slug: 'intro/transaction'},
                                {
                                    label: 'AntiCheat List ',
                                    items: [
                                        { slug: 'anticheat/aac'},
                                        { slug: 'anticheat/grim'},
                                        { slug: 'anticheat/intave'},
                                        { slug: 'anticheat/matrix'},
                                        { slug: 'anticheat/ncp'},
                                        { slug: 'anticheat/spartan'},
                                        { slug: 'anticheat/verus'},
                                        { slug: 'anticheat/vulcan'},
                                        { slug: 'anticheat/atomic'},
                                        { slug: 'anticheat/karhu'},
                                        { slug: 'anticheat/polar'},
                                        { slug: 'anticheat/erreta'},
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'Modules',
                    items: [
                        { slug: 'intro/moduleintro'},
                        {
                            label: 'Combat',
                            items: [
                                { slug: 'combat/antibot' },
                                { slug: 'combat/autogapple' },
                                { slug: 'combat/killaura' },
                                {slug: 'combat/morekb' },
                            ],
                        },
                        {
                            label: 'Legit',
                            items: [
                                { slug: 'legit/smartclick' }
                            ],
                        },
                        {
                            label: 'Latency',
                            items: [
                                { slug: 'latency/lagrange' }
                            ],
                        }, 
                        {
                            label: 'Movement',
                            items: [
                                { slug: 'movement/motionmod' }
                            ],
                        },              
                        {
                            label: 'Player',
                            items: [
                                { slug: 'player/airstuck' },
                                { slug: 'player/anticactus' },
                                { slug: 'player/antifire' },
                                { slug: 'player/antihunger' },
                                { slug: 'player/autoeat' },
                                { slug: 'player/autoenderpearl' },
                                { slug: 'player/autoextinguish' },
                                { slug: 'player/autorespawn' },
                                { slug: 'player/autotool' },
                            ],
                        },
                        {
                            label: 'Render',
                            items: [
                                { slug: 'render/2ditems' },
                                { slug: 'render/ambiance' },
                                { slug: 'render/antiblind' },
                                { slug: 'render/antihurtcam' },
                                { slug: 'render/antiinvisible' },
                                { slug: 'render/antistrike' },
                                { slug: 'render/arraylist' },
                                { slug: 'render/arrowhitbox' },
                                { slug: 'render/aspectratio' },
                                { slug: 'render/attackeffects' },
                                { slug: 'render/barriers' },
                                { slug: 'render/blockanimation' },
                                { slug: 'render/blockesp' },
                                { slug: 'render/blockoverlay' },
                                { slug: 'render/blocktraceesp' },
                                { slug: 'render/blur' },
                                { slug: 'render/breakindicator' },
                                { slug: 'render/cameranoclip' },
                                { slug: 'render/centredinventory' },
                                { slug: 'render/chams' },
                                { slug: 'render/chat' },
                                { slug: 'render/child' },
                                { slug: 'render/chinahat' },
                                { slug: 'render/chunkanimator' },
                                { slug: 'render/clickgui' },
                                { slug: 'render/cosmetics' },
                                { slug: 'render/coordinates' },
                                { slug: 'render/crosshair' },
                                { slug: 'render/customcamera' },
                                { slug: 'render/customcape' },
                                { slug: 'render/customclientcolor' },
                                { slug: 'render/customefireheight' },
                                { slug: 'render/customglint' },
                                { slug: 'render/customitempos' },
                                { slug: 'render/customname' },
                                { slug: 'render/customskin' },
                                { slug: 'render/customzoom' },
                                { slug: 'render/debuginformation' },
                                { slug: 'render/esp' },
                                { slug: 'render/emojify' },
                                { slug: 'render/entitycolor' },
                                { slug: 'render/fovarrows' },
                                { slug: 'render/fovmodifier' },
                                { slug: 'render/freelook' },
                                { slug: 'render/fullbright' },
                                { slug: 'render/goldspawntimer' },
                                { slug: 'render/hotbar' },
                                { slug: 'render/hud' },
                                { slug: 'render/invismode' },
                                { slug: 'render/itemesp' },
                                { slug: 'render/itemphysics' },
                                { slug: 'render/keystroke' },
                                { slug: 'render/noblockparticles' },
                                { slug: 'render/nobob' },
                                { slug: 'render/notification' },
                                { slug: 'render/protector' },
                                { slug: 'render/renderpotion' },
                                { slug: 'render/scoreboard' },
                                { slug: 'render/shadow' },
                                { slug: 'render/storageesp' },
                                { slug: 'render/swinganimation' },
                                { slug: 'render/tablist' },
                                { slug: 'render/targetesp' },
                                { slug: 'render/targethud' },
                                { slug: 'render/tntesp' },
                                { slug: 'render/tracers' },
                                { slug: 'render/trajectories' },
                            ],
                        },
                        {
                            label: 'World',
                            items: [
                                { slug: 'world/fastbreak' }
                            ],
                        },
                        {
                            label: 'Misc',
                            items: [
                                { slug: 'misc/antiafk' },
                                { slug: 'misc/antiachievement' },
                                { slug: 'misc/aquamessenger' },
                                { slug: 'misc/autodisable' },
                                { slug: 'misc/autoleave' },
                                { slug: 'misc/autoplay' },
                                { slug: 'misc/autoregister' },
                                { slug: 'misc/beveragenotify' },
                                { slug: 'misc/clientsettings' },
                                { slug: 'misc/clientspoofer' },
                                { slug: 'misc/debug' },
                                { slug: 'misc/disabler' },
                                { slug: 'misc/enderpearlnotify' },
                                { slug: 'misc/exploitfixer' },
                                { slug: 'misc/fakegamemode' },
                                { slug: 'misc/fixes' },
                                { slug: 'misc/flagdetector' },
                                { slug: 'misc/irc'},
                                { slug: 'misc/ircchat'},
                                { slug: 'misc/midclick'},
                                { slug: 'misc/murderfinder'},
                                { slug: 'misc/nodiscordrpc'},
                                { slug: 'misc/openauthmod'},
                                { slug: 'misc/panic'},
                                { slug: 'misc/protocolversion'},
                                { slug: 'misc/radio'},
                                { slug: 'misc/rotationhandler'},
                                { slug: 'misc/staffdetector'},
                                { slug: 'misc/timermanipulation'},
                            ],
                        },
                        {
                            label: 'Fun',
                            items: [
                                { slug: 'fun/autojumpandrun' },
                                { slug: 'fun/autoreport' },
                                { slug: 'fun/deathcommand' },
                                { slug: 'fun/friendfinder' },
                                { slug: 'fun/killmessage' },
                                { slug: 'fun/lag' },
                                { slug: 'fun/mlg'},
                                { slug: 'fun/partyspammer'},
                                { slug: 'fun/shufflemode'},
                                { slug: 'fun/spammer'},
                                { slug: 'fun/spinbot'},
                            ],
                        },
                    ],
                },
                {
                    label: 'TOS',
                    items: [
                        { slug: 'tos/tos' }
                    ],
                },
            ],
        }),
    ],
})
