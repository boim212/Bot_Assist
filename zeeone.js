const _0x384a40 = _0x4da2;
(function(_0x5a18ca, _0x2b575e) {
    const _0x1de304 = _0x4da2,
        _0x308fc9 = _0x5a18ca();
    while (!![]) {
        try {
            const _0x3bdd80 = parseInt(_0x1de304(0x134)) / 0x1 + parseInt(_0x1de304(0x152)) / 0x2 * (-parseInt(_0x1de304(0x1a2)) / 0x3) + parseInt(_0x1de304(0xe3)) / 0x4 + -parseInt(_0x1de304(0x11d)) / 0x5 + parseInt(_0x1de304(0x136)) / 0x6 + parseInt(_0x1de304(0x119)) / 0x7 * (-parseInt(_0x1de304(0x12d)) / 0x8) + -parseInt(_0x1de304(0x133)) / 0x9 * (-parseInt(_0x1de304(0x198)) / 0xa);
            if (_0x3bdd80 === _0x2b575e) break;
            else _0x308fc9['push'](_0x308fc9['shift']());
        } catch (_0x114922) { _0x308fc9['push'](_0x308fc9['shift']()); }
    }
}(_0x31fc, 0x5a7fa));
const { WAConnection: _WAConnection, MessageType, Presence, MessageOptions, Mimetype, WALocationMessage, WA_MESSAGE_STUB_TYPES, ReconnectMode, WAMessageProto, relayWAMessage, ProxyAgent, GroupSettingChange, waChatKey, mentionedJid, processTime, processTicksAndRejections, ECONNABORTED, apikey, WA_DEAFULT_EPHEMERAL, DataView, TypedArray, device, Browser } = require(_0x384a40(0x1a3)), simple = require(_0x384a40(0x19a)), fs = require('fs'), WAConnection = simple['WAConnection'](_WAConnection), moment = require('moment-timezone'), { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, banner, close } = require(_0x384a40(0x107)), { color } = require(_0x384a40(0xdc)), fetch = require(_0x384a40(0xea)), chalk = require(_0x384a40(0xff)), setting = JSON['parse'](fs[_0x384a40(0xe0)](_0x384a40(0x113)));
anticall = setting[_0x384a40(0x130)];
const { spawn, exec, execSync } = require(_0x384a40(0xf6)), clc = require(_0x384a40(0xff)), cfonts = require(_0x384a40(0x188)), axios = require('axios'), figlet = require('figlet'), sleep = async _0x5e0ff8 => { return new Promise(_0x2fd3f2 => setTimeout(_0x2fd3f2, _0x5e0ff8)); }, porti = [_0x384a40(0x126), _0x384a40(0x132), _0x384a40(0x193), _0x384a40(0x15b), _0x384a40(0x171), _0x384a40(0x1a7)], kakakhi = porti[Math['floor'](Math['random']() * porti['length'])], { uploadImages } = require(_0x384a40(0x103));
welcome = setting[_0x384a40(0x140)], leave = setting[_0x384a40(0xde)], console[_0x384a40(0x153)](color(_0x384a40(0x10b), _0x384a40(0x112))), require(_0x384a40(0x189)), nocache(_0x384a40(0x189), _0xcb9268 => console[_0x384a40(0x153)](_0xcb9268 + _0x384a40(0x135)));
const starts = async(_0x72fbd3 = new WAConnection()) => {
    const _0x110691 = _0x384a40;
    _0x72fbd3[_0x110691(0x19e)][_0x110691(0x151)] = 'warn', _0x72fbd3['version'] = [0x2, 0x85c, 0xe], _0x72fbd3[_0x110691(0x10d)] = [_0x110691(0x150), 'Safari', _0x110691(0x12e)], console[_0x110691(0x153)](color(figlet['textSync'](_0x110691(0x15a), { 'font': 'Standard', 'horizontalLayout': _0x110691(0x139), 'vertivalLayout': _0x110691(0x139), 'whitespaceBreak': ![] }), 'skyblue')), await sleep(0x3e8), console[_0x110691(0x153)](_0x110691(0x180), color('Checking\x20database\x20configuration...', 'yellow')), await sleep(0x1f4), console[_0x110691(0x153)](_0x110691(0x180), color('Done', _0x110691(0xe1))), await sleep(0x1f4), console[_0x110691(0x153)](_0x110691(0x180), color('Server\x20running\x20on\x20port\x20' + kakakhi, _0x110691(0x143))), _0x72fbd3['on']('qr', () => {
        const _0x242aab = _0x110691;
        console[_0x242aab(0x153)](color('[', _0x242aab(0x15f)), color('!', 'red'), color(']', _0x242aab(0x15f)), color('\x20Now\x20scan\x20the\x20qr'));
    }), fs['existsSync']('./session.json') && _0x72fbd3[_0x110691(0x18d)](_0x110691(0xf7)), _0x72fbd3['on'](_0x110691(0x183), () => {
        const _0x56bdcb = _0x110691;
        console['log']('[\x1b[1;32m\x20Bot_Assist\x20\x1b[1;37m]', color(_0x56bdcb(0x123), _0x56bdcb(0x143)));
    }), _0x72fbd3['on'](_0x110691(0x197), () => {
        const _0x331ea1 = _0x110691;
        console[_0x331ea1(0x153)](_0x331ea1(0x180), color('Connected', _0x331ea1(0x143)));
    }), _0x72fbd3['on']('ws-close', () => {
        const _0x4acebc = _0x110691;
        console[_0x4acebc(0x153)]('[\x1b[1;32m\x20Bot_Assist\x20\x1b[1;37m]', color(_0x4acebc(0x15d), 'cyan'));
    }), _0x72fbd3['on'](_0x110691(0xdb), async() => {
        const _0xfe60ef = _0x110691;
        console[_0xfe60ef(0x153)](_0xfe60ef(0x180), color('Disconnected.', _0xfe60ef(0x16d)));
    });
    if (anticall) {
        if (anticall === ![]) return;
        try { teks = _0x110691(0x174); } catch { teks = 'https://chat.whatsapp.com/ChatAdmin'; }
        _0x72fbd3[_0x110691(0x14e)]({ 'json': [_0x110691(0xdf), _0x110691(0x149), '' + teks[_0x110691(0x10e)](_0x110691(0x19c), '')] });
    }
    if (setting[_0x110691(0x157)]) {
        if (setting[_0x110691(0x157)] === ![]) return;
        try { teks = _0x110691(0x15c); } catch { teks = _0x110691(0x15c); }
        _0x72fbd3['query']({ 'json': ['action', _0x110691(0x149), '' + teks[_0x110691(0x10e)](_0x110691(0x19c), '')] });
    }
    const _0x4874a4 = (_0x5bbd82, _0x2f6350, _0x4d8bed, _0x5b51fd = [], _0x3f4881 = {}) => {
        const _0x516603 = _0x110691,
            _0x3e4baf = { 'contentText': _0x2f6350, 'footerText': _0x4d8bed, 'buttons': _0x5b51fd, 'headerType': 0x1 };
        _0x72fbd3[_0x516603(0x109)](_0x5bbd82, _0x3e4baf, MessageType[_0x516603(0x100)], _0x3f4881);
    };
    try { opo = await fetchJson(_0x110691(0xf4)); } catch { opo = { 'result': _0x110691(0x176) }; }
    let _0x40aea1 = opo['result'];
    try { _0x4874a4(setting[_0x110691(0x122)] + _0x110691(0x165), _0x40aea1, _0x110691(0x10a), [{ 'buttonId': 'tes', 'buttonText': { 'displayText': 'Okey\x20😉' }, 'type': _0x110691(0x146) }], {}); } catch { _0x4874a4(setting[_0x110691(0x122)] + _0x110691(0x165), _0x110691(0x13b), _0x110691(0x18c), [{ 'buttonId': _0x110691(0x155), 'buttonText': { 'displayText': 'Okey\x20😉' }, 'type': _0x110691(0x146) }], {}); }
    await _0x72fbd3[_0x110691(0x17e)]({ 'timeoutMs': 0x1e * 0xbb8 }), fs[_0x110691(0x167)]('./session.json', JSON['stringify'](_0x72fbd3['base64EncodedAuthInfo'](), null, '\x09')), _0x72fbd3['on'](_0x110691(0x111), async _0x57ff99 => {
        const _0x27759d = _0x110691;
        require(_0x27759d(0x189))(_0x72fbd3, _0x57ff99);
    }), _0x72fbd3['on'](_0x110691(0xdd), _0x2c85ea => { const _0x2760cb = _0x110691; if (blocked[_0x2760cb(0x177)] > 0x2) return; for (let _0x3a44f7 of _0x2c85ea[0x1][_0x2760cb(0x12f)]) { blocked['push'](_0x3a44f7[_0x2760cb(0x10e)](_0x2760cb(0x162), 's.whatsapp.net')); } }), _0x72fbd3['on'](_0x110691(0x182), async _0x4cac41 => {
        const _0x34cb05 = _0x110691;
        try {
            falfa = { 'key': { 'fromMe': ![], 'participant': _0x34cb05(0x14a), 'remoteJid': _0x34cb05(0x14a) }, 'message': { 'groupInviteMessage': { 'groupJid': '6288213840883-1616169743@g.us', 'inviteCode': _0x34cb05(0x11a), 'groupName': _0x34cb05(0x101), 'caption': _0x34cb05(0xf9) + setting[_0x34cb05(0xfb)], 'jpegThumbnail': fs['readFileSync'](_0x34cb05(0x102) + setting[_0x34cb05(0x172)]) } } };
            const _0x23286a = async(_0x1a9945, _0x57f670, _0x37a9ad, _0xfe8bcb, _0x12dd98 = [], _0x145c0a = {}) => {
                    const _0x1a47bc = _0x34cb05;
                    kma = _0xfe8bcb;
                    const _0x50707a = await _0x72fbd3[_0x1a47bc(0xed)](_0x1a9945, kma, MessageType['location'], { 'thumbnail': kma });
                    mhan = _0x50707a['message'][_0x1a47bc(0xe4)] ? _0x50707a[_0x1a47bc(0x1a6)][_0x1a47bc(0xe4)] : _0x50707a;
                    const _0x53b92f = { 'locationMessage': mhan[_0x1a47bc(0x1a6)][_0x1a47bc(0x128)], 'contentText': _0x57f670, 'footerText': _0x37a9ad, 'buttons': _0x12dd98, 'headerType': 0x6 };
                    _0x72fbd3[_0x1a47bc(0x109)](_0x1a9945, _0x53b92f, MessageType[_0x1a47bc(0x100)], _0x145c0a);
                },
                _0x22e01b = await _0x72fbd3[_0x34cb05(0x1a9)](_0x4cac41[_0x34cb05(0x163)]);
            console['log'](_0x4cac41);
            const _0x3ddae5 = moment['tz'](_0x34cb05(0xe2))[_0x34cb05(0x125)](_0x34cb05(0x14d)),
                _0x4c9a9c = await _0x72fbd3[_0x34cb05(0x1a9)](_0x4cac41['jid']),
                _0x3b5c98 = _0x4c9a9c[_0x34cb05(0x115)],
                _0x13d90c = getGroupAdmins(_0x3b5c98);
            memeg = _0x22e01b['participants'][_0x34cb05(0x177)], num = _0x4cac41[_0x34cb05(0x115)][0x0];
            let _0x58d592 = new Date(),
                _0x1c136d = 'id',
                _0x1db21b = new Date(0x0)[_0x34cb05(0x19d)]() - new Date('1\x20Januari\x202021')[_0x34cb05(0x19d)](),
                _0x5a0bc6 = [_0x34cb05(0x106), _0x34cb05(0xd8), _0x34cb05(0x1a8), _0x34cb05(0x142), _0x34cb05(0x16c)][Math[_0x34cb05(0x121)]((_0x58d592 * 0x1 + _0x1db21b) / 0x50ae4c0) % 0x5],
                _0x303085 = _0x58d592['toLocaleDateString'](_0x1c136d, { 'weekday': _0x34cb05(0x145) }),
                _0x1cbbd8 = _0x58d592[_0x34cb05(0x16b)](_0x1c136d, { 'day': 'numeric', 'month': _0x34cb05(0x145), 'year': _0x34cb05(0xec) });
            try { pp_user = await _0x72fbd3[_0x34cb05(0x175)](num); } catch (_0x22de6c) { pp_user = _0x34cb05(0x14f); }
            try { ppgc = await _0x72fbd3[_0x34cb05(0x175)](_0x4cac41[_0x34cb05(0x163)]); } catch (_0x25a117) { ppgc = _0x34cb05(0x14f); }
            let _0x4f16eb = await getBuffer(pp_user);
            imge = await uploadImages(_0x4f16eb);
            let _0x1fdcbf = await getBuffer(ppgc);
            ime = await uploadImages(_0x1fdcbf);
            _0x4cac41[_0x34cb05(0xdf)] == _0x34cb05(0x18e) && num[_0x34cb05(0x12a)](_0x72fbd3[_0x34cb05(0xf8)][_0x34cb05(0x163)]) && _0x72fbd3['sendMessage'](_0x4cac41['jid'], 'Halo\x20saya\x20adalah\x20bot\x20WhatsApp,\x20sebelumnya\x20terimakasih\x20telah\x20mengundang\x20saya\x20ke\x20group\x20ini.\x20Untuk\x20memulai\x20bot\x20silahkan\x20ketik\x20!menu.', _0x34cb05(0x108));
            if (welcome) {
                if (welcome === ![]) return;
                if (_0x4cac41[_0x34cb05(0xdf)] == _0x34cb05(0x18e) && !num[_0x34cb05(0x12a)](_0x72fbd3[_0x34cb05(0xf8)]['jid'])) {
                    let _0x2904bc = _0x72fbd3['contacts'][num] || { 'notify': num[_0x34cb05(0x10e)](/@.+/, '') };
                    anu_user = _0x2904bc[_0x34cb05(0x169)] || _0x2904bc[_0x34cb05(0x127)] || num['split']('@')[0x0];
                    let _0x16a271 = await _0x72fbd3['getStatus'](num),
                        _0x4558b3 = '' + (_0x16a271 ? '' + _0x16a271[_0x34cb05(0x19f)] : '-');
                    teks = _0x34cb05(0x17d) + num[_0x34cb05(0xfa)]('@')[0x0] + '*\x20' + enter + enter + '📛\x20:\x20_' + anu_user + '_' + enter + _0x34cb05(0x14c) + _0x4558b3 + '_' + enter + _0x34cb05(0x164) + num['split']('@')[0x0] + '_' + enter + _0x34cb05(0x148) + memeg + _0x34cb05(0x1a5) + enter + _0x34cb05(0xf5) + _0x3ddae5 + '\x20Indonesian\x20time_' + enter + enter + _0x34cb05(0x161);
                    try { buff = await getBuffer(_0x34cb05(0x179) + encodeURI(anu_user) + _0x34cb05(0x192) + imge + _0x34cb05(0x10c) + encodeURI(_0x22e01b[_0x34cb05(0x19b)]) + '&ppgc=' + ime + _0x34cb05(0x173) + encodeURI(_0x3b5c98[_0x34cb05(0x177)]) + _0x34cb05(0xfd) + ime + _0x34cb05(0x105)); } catch { buff = await getBuffer(pp_user); }
                    let _0x2efd78 = [{ 'buttonId': 'owner', 'buttonText': { 'displayText': 'Welcome\x20👋' }, 'type': _0x34cb05(0x146) }];
                    _0x23286a(_0x22e01b['id'], '' + teks, _0x34cb05(0xf2) + _0x22e01b[_0x34cb05(0x19b)], buff, _0x2efd78, { 'contextInfo': { 'mentionedJid': [num] } });
                }
            }
            if (leave) {
                if (leave === ![]) return;
                if (_0x4cac41['action'] == _0x34cb05(0x144) && !num[_0x34cb05(0x12a)](_0x72fbd3[_0x34cb05(0xf8)]['jid'])) {
                    let _0x5f498b = _0x72fbd3[_0x34cb05(0x13c)][num] || { 'notify': num[_0x34cb05(0x10e)](/@.+/, '') };
                    anu_user = _0x5f498b['vname'] || _0x5f498b[_0x34cb05(0x127)] || num['split']('@')[0x0], out = '◪\x20Goodbye\x20@' + num['split']('@')[0x0] + enter + _0x34cb05(0x11b) + enter + _0x22e01b[_0x34cb05(0x19b)] + enter + '│' + enter + _0x34cb05(0x13e) + num[_0x34cb05(0x10e)](_0x34cb05(0x165), '') + enter + _0x34cb05(0x11f);
                    try { buff = await getBuffer('https://felix-404.herokuapp.com/api/canvas/goodbye?nama=' + encodeURI(anu_user) + '&pp=' + imge + '&gc=' + encodeURI(_0x22e01b[_0x34cb05(0x19b)]) + '&ppgc=' + ime + _0x34cb05(0x173) + encodeURI(_0x3b5c98[_0x34cb05(0x177)]) + _0x34cb05(0xfd) + ime + _0x34cb05(0x105)); } catch { buff = await getBuffer(pp_user); }
                    let _0x9f77a1 = [{ 'buttonId': _0x34cb05(0x170), 'buttonText': { 'displayText': _0x34cb05(0x15e) }, 'type': _0x34cb05(0x146) }];
                    _0x23286a(_0x22e01b['id'], '' + out, _0x34cb05(0xf2) + _0x22e01b[_0x34cb05(0x19b)], buff, _0x9f77a1, { 'contextInfo': { 'mentionedJid': [num] } });
                }
            } else {
                if (_0x4cac41[_0x34cb05(0xdf)] == _0x34cb05(0xf0)) {
                    const _0x3af913 = await _0x72fbd3[_0x34cb05(0x1a9)](_0x4cac41['jid']);
                    num = _0x4cac41[_0x34cb05(0x115)][0x0];
                    try { ppimg = await _0x72fbd3[_0x34cb05(0x175)](_0x4cac41['participants'][0x0][_0x34cb05(0xfa)]('@')[0x0] + _0x34cb05(0x131)); } catch { ppimg = _0x34cb05(0x156); }
                    let _0x4e7f07 = await getBuffer(ppimg);
                    try {
                        teks = _0x34cb05(0x18b) + num[_0x34cb05(0x10e)](_0x34cb05(0x165), '') + _0x34cb05(0x120) + num[_0x34cb05(0xfa)]('@')[0x0] + _0x34cb05(0x18a) + _0x3af913[_0x34cb05(0x19b)] + '\x0a\x0a_Selamat\x20jabatan\x20kamu\x20naik_';
                        let _0xb9ba70 = [{ 'buttonId': 'owner', 'buttonText': { 'displayText': _0x34cb05(0x184) }, 'type': _0x34cb05(0x146) }, { 'buttonId': _0x34cb05(0x12c), 'buttonText': { 'displayText': _0x34cb05(0x195) }, 'type': _0x34cb05(0x146) }];
                        _0x23286a(_0x3af913['id'], '' + teks, _0x34cb05(0xf2) + _0x3af913['subject'], _0x4e7f07, _0xb9ba70, { 'contextInfo': { 'mentionedJid': [num] } });
                    } catch { teks = '\x20*P\x20R\x20O\x20M\x20O\x20T\x20E\x20\x20D\x20E\x20T\x20E\x20C\x20T\x20E\x20D*\x0a\x09\x09\x09\x0a```Nomor\x20:```\x20' + num['replace'](_0x34cb05(0x165), '') + _0x34cb05(0x120) + num[_0x34cb05(0xfa)]('@')[0x0] + _0x34cb05(0x18a) + _0x3af913[_0x34cb05(0x19b)] + _0x34cb05(0x181), _0x72fbd3[_0x34cb05(0x109)](_0x3af913['id'], _0x4e7f07, MessageType['image'], { 'thumbnail': _0x4e7f07, 'caption': teks, 'contextInfo': { 'mentionedJid': [num], 'forwardingScore': 0x3e7, 'isForwarded': !![] }, 'sendEphemeral': !![], 'quoted': falfa }); }
                } else {
                    if (_0x4cac41[_0x34cb05(0xdf)] == 'demote') {
                        num = _0x4cac41[_0x34cb05(0x115)][0x0];
                        const _0x511dd9 = await _0x72fbd3['groupMetadata'](_0x4cac41['jid']);
                        try { ppimg = await _0x72fbd3[_0x34cb05(0x175)](_0x4cac41['participants'][0x0]['split']('@')[0x0] + _0x34cb05(0x131)); } catch { ppimg = _0x34cb05(0x156); }
                        let _0xbec813 = await getBuffer(ppimg);
                        try {
                            teks = _0x34cb05(0x168) + num[_0x34cb05(0x10e)](_0x34cb05(0x165), '') + _0x34cb05(0x120) + num[_0x34cb05(0xfa)]('@')[0x0] + _0x34cb05(0x18a) + _0x511dd9[_0x34cb05(0x19b)] + _0x34cb05(0x1a0);
                            let _0x355afb = [{ 'buttonId': 'owner', 'buttonText': { 'displayText': 'OWNER' }, 'type': _0x34cb05(0x146) }, { 'buttonId': _0x34cb05(0x12c), 'buttonText': { 'displayText': _0x34cb05(0x195) }, 'type': _0x34cb05(0x146) }];
                            _0x23286a(_0x511dd9['id'], '' + teks, _0x34cb05(0xf2) + _0x511dd9[_0x34cb05(0x19b)], _0xbec813, _0x355afb, { 'contextInfo': { 'mentionedJid': [num] } });
                        } catch { teks = '\x20*D\x20E\x20M\x20O\x20T\x20E\x20\x20D\x20E\x20T\x20E\x20C\x20T\x20E\x20D*\x0a\x09\x09\x09\x0a```Nomor\x20:```\x20' + num[_0x34cb05(0x10e)](_0x34cb05(0x165), '') + _0x34cb05(0x120) + num['split']('@')[0x0] + _0x34cb05(0x18a) + _0x511dd9[_0x34cb05(0x19b)] + '\x0a\x0a_Kasian\x20malah\x20kena\x20demote_', _0x72fbd3['sendMessage'](_0x511dd9['id'], _0xbec813, MessageType[_0x34cb05(0xf1)], { 'thumbnail': _0xbec813, 'caption': teks, 'contextInfo': { 'mentionedJid': [num], 'forwardingScore': 0x3e7, 'isForwarded': !![] }, 'sendEphemeral': !![], 'quoted': falfa }); }
                    }
                }
            }
        } catch (_0x274c4d) { console['log'](_0x34cb05(0x138), color(_0x274c4d, _0x34cb05(0xe9))); }
    }), _0x72fbd3['on'](_0x110691(0x185), async _0x59dc53 => {
        const _0x276cd8 = _0x110691;
        console['log'](_0x59dc53), falfa = { 'key': { 'fromMe': ![], 'participant': _0x276cd8(0x14a), 'remoteJid': _0x276cd8(0x14a) }, 'message': { 'groupInviteMessage': { 'groupJid': '6288213840883-1616169743@g.us', 'inviteCode': _0x276cd8(0x11a), 'groupName': _0x276cd8(0x101), 'caption': _0x276cd8(0xf9) + setting[_0x276cd8(0xfb)], 'jpegThumbnail': fs['readFileSync'](_0x276cd8(0x102) + setting[_0x276cd8(0x172)]) } } }, metdata = await _0x72fbd3[_0x276cd8(0x1a9)](_0x59dc53[_0x276cd8(0x163)]);
        try { ppimg = await _0x72fbd3[_0x276cd8(0x175)](_0x59dc53[_0x276cd8(0x163)]); } catch { ppimg = _0x276cd8(0x156); }
        let _0x4446f6 = await getBuffer(ppimg);
        if (_0x59dc53[_0x276cd8(0xe7)] == 'false') {
            teks = _0x276cd8(0x116);
            try {
                let _0x7c348c = [{ 'buttonId': _0x276cd8(0x170), 'buttonText': { 'displayText': _0x276cd8(0x184) }, 'type': _0x276cd8(0x146) }, { 'buttonId': _0x276cd8(0x12c), 'buttonText': { 'displayText': _0x276cd8(0x195) }, 'type': 'RESPONSE' }];
                sendButLocation(metdata['id'], '' + teks, _0x276cd8(0xf2) + metdata['id'][_0x276cd8(0x19b)], _0x4446f6, _0x7c348c, {});
            } catch { _0x72fbd3[_0x276cd8(0x109)](metdata['id'], _0x4446f6, MessageType[_0x276cd8(0xf1)], { 'thumbnail': _0x4446f6, 'caption': teks, 'quoted': falfa }); }
            console[_0x276cd8(0x153)](clc[_0x276cd8(0x143)](_0x276cd8(0x1a1) + metdata[_0x276cd8(0x19b)]));
        } else {
            if (_0x59dc53[_0x276cd8(0xe7)] == _0x276cd8(0xef)) {
                teks = '*G\x20R\x20O\x20U\x20P\x20\x20C\x20L\x20O\x20S\x20E\x20D*' + enter + enter + _0x276cd8(0x190) + enter + _0x276cd8(0x124);
                try {
                    let _0x9aea00 = [{ 'buttonId': 'owner', 'buttonText': { 'displayText': _0x276cd8(0x184) }, 'type': _0x276cd8(0x146) }, { 'buttonId': 'menu', 'buttonText': { 'displayText': _0x276cd8(0x195) }, 'type': _0x276cd8(0x146) }];
                    sendButLocation(metdata['id'], '' + teks, 'WhatsApp™©\x20|\x20' + metdata['id'][_0x276cd8(0x19b)], _0x4446f6, _0x9aea00, {});
                } catch { _0x72fbd3[_0x276cd8(0x109)](metdata['id'], _0x4446f6, MessageType['image'], { 'thumbnail': _0x4446f6, 'caption': teks, 'quoted': falfa }); }
                console['log'](clc[_0x276cd8(0x143)](_0x276cd8(0xf3) + metdata['subject']));
            } else {
                if (!_0x59dc53['desc'] == '') {
                    tag = _0x59dc53[_0x276cd8(0xe6)][_0x276cd8(0xfa)]('@')[0x0] + _0x276cd8(0x165), teks = _0x276cd8(0x191) + enter + enter + _0x276cd8(0x129) + _0x59dc53[_0x276cd8(0xe6)][_0x276cd8(0xfa)]('@')[0x0] + enter + _0x276cd8(0xe5) + _0x59dc53[_0x276cd8(0x114)];
                    try {
                        let _0x1dbfae = [{ 'buttonId': _0x276cd8(0x170), 'buttonText': { 'displayText': _0x276cd8(0x184) }, 'type': _0x276cd8(0x146) }, { 'buttonId': _0x276cd8(0x12c), 'buttonText': { 'displayText': _0x276cd8(0x195) }, 'type': _0x276cd8(0x146) }];
                        sendButLocation(metdata['id'], '' + teks, 'WhatsApp™©\x20|\x20' + metdata['id'][_0x276cd8(0x19b)], _0x4446f6, _0x1dbfae, { 'contextInfo': { 'mentionedJid': [tag] } });
                    } catch { _0x72fbd3[_0x276cd8(0x109)](metdata['id'], _0x4446f6, MessageType[_0x276cd8(0xf1)], { 'thumbnail': _0x4446f6, 'caption': teks, 'contextInfo': { 'mentionedJid': [tag] }, 'quoted': falfa }); }
                    console[_0x276cd8(0x153)](clc[_0x276cd8(0x143)]('[\x20Group\x20Description\x20Change\x20]\x20In\x20' + metdata['subject']));
                } else {
                    if (_0x59dc53[_0x276cd8(0xfe)] == _0x276cd8(0xd9)) {
                        teks = '-\x20[\x20*Group\x20Setting\x20Change*\x20]\x20-' + enter + enter + 'Edit\x20Group\x20info\x20telah\x20dibuka\x20untuk\x20member' + enter + _0x276cd8(0x117);
                        try {
                            let _0x44f787 = [{ 'buttonId': _0x276cd8(0x170), 'buttonText': { 'displayText': _0x276cd8(0x184) }, 'type': _0x276cd8(0x146) }, { 'buttonId': _0x276cd8(0x12c), 'buttonText': { 'displayText': _0x276cd8(0x195) }, 'type': _0x276cd8(0x146) }];
                            sendButLocation(metdata['id'], '' + teks, _0x276cd8(0xf2) + metdata['id'][_0x276cd8(0x19b)], _0x4446f6, _0x44f787, {});
                        } catch { _0x72fbd3['sendMessage'](metdata['id'], _0x4446f6, MessageType[_0x276cd8(0xf1)], { 'thumbnail': _0x4446f6, 'caption': teks, 'quoted': falfa }); }
                        console[_0x276cd8(0x153)](clc['yellow'](_0x276cd8(0x178) + metdata[_0x276cd8(0x19b)]));
                    } else {
                        if (_0x59dc53[_0x276cd8(0xfe)] == _0x276cd8(0xef)) {
                            teks = _0x276cd8(0x104) + enter + enter + _0x276cd8(0x16a) + enter + _0x276cd8(0x187);
                            try {
                                let _0x5d4235 = [{ 'buttonId': 'owner', 'buttonText': { 'displayText': 'OWNER' }, 'type': 'RESPONSE' }, { 'buttonId': _0x276cd8(0x12c), 'buttonText': { 'displayText': _0x276cd8(0x195) }, 'type': 'RESPONSE' }];
                                sendButLocation(metdata['id'], '' + teks, _0x276cd8(0xf2) + metdata['id']['subject'], _0x4446f6, _0x5d4235, { 'contextInfo': { 'mentionedJid': [num] } });
                            } catch { _0x72fbd3[_0x276cd8(0x109)](metdata['id'], _0x4446f6, MessageType['image'], { 'thumbnail': _0x4446f6, 'caption': teks, 'quoted': falfa }); }
                            console['log'](clc[_0x276cd8(0x143)](_0x276cd8(0x178) + metdata[_0x276cd8(0x19b)]));
                        }
                    }
                }
            }
        }
    }), antidel = setting[_0x110691(0x118)], _0x72fbd3['on'](_0x110691(0x196), async _0x346395 => {
        const _0x29f800 = _0x110691;
        let _0x2e3b60 = { 'key': { 'fromMe': ![], 'participant': _0x29f800(0x14a), 'remoteJid': _0x29f800(0x14a) }, 'message': { 'groupInviteMessage': { 'groupJid': '6288213840883-1616169743@g.us', 'inviteCode': 'mememteeeekkeke', 'groupName': _0x29f800(0x101), 'caption': _0x29f800(0xf9) + setting['ownername'], 'jpegThumbnail': fs[_0x29f800(0xe0)](_0x29f800(0x102) + setting[_0x29f800(0x172)]) } } };
        if (_0x346395['key']['remoteJid'] == _0x29f800(0x17a)) return;
        if (!_0x346395[_0x29f800(0x17c)][_0x29f800(0x17f)] && _0x346395[_0x29f800(0x17c)][_0x29f800(0x17f)]) return;
        if (antidel === ![]) return;
        _0x346395[_0x29f800(0x1a6)] = Object[_0x29f800(0xeb)](_0x346395[_0x29f800(0x1a6)])[0x0] === _0x29f800(0xe4) ? _0x346395[_0x29f800(0x1a6)]['ephemeralMessage'][_0x29f800(0x1a6)] : _0x346395[_0x29f800(0x1a6)];
        const _0x21f6d6 = moment['tz'](_0x29f800(0xe2))['format'](_0x29f800(0x14d));
        let _0x6f656e = new Date(),
            _0x436a7c = 'id',
            _0x2a6868 = new Date(0x0)[_0x29f800(0x19d)]() - new Date('1\x20Januari\x202021')[_0x29f800(0x19d)](),
            _0x54ff97 = [_0x29f800(0x106), 'Pon', _0x29f800(0x1a8), _0x29f800(0x142), 'Legi'][Math[_0x29f800(0x121)]((_0x6f656e * 0x1 + _0x2a6868) / 0x50ae4c0) % 0x5],
            _0x2dc79b = _0x6f656e[_0x29f800(0x16b)](_0x436a7c, { 'weekday': _0x29f800(0x145) }),
            _0x461af2 = _0x6f656e[_0x29f800(0x16b)](_0x436a7c, { 'day': _0x29f800(0xec), 'month': _0x29f800(0x145), 'year': _0x29f800(0xec) });
        const _0xc42302 = Object[_0x29f800(0xeb)](_0x346395[_0x29f800(0x1a6)])[0x0];
        _0x72fbd3[_0x29f800(0x109)](_0x346395[_0x29f800(0x17c)][_0x29f800(0xe8)], '```\x20A\x20N\x20T\x20I\x20\x20D\x20E\x20L\x20E\x20T\x20E\x20```\x0a\x0a📛\x20Name\x20:\x20@' + _0x346395[_0x29f800(0x160)][_0x29f800(0xfa)]('@')[0x0] + _0x29f800(0x199) + _0x2dc79b + '\x20' + _0x461af2 + _0x29f800(0x194) + _0x21f6d6 + '\x0a🆔\x20Type\x20:\x20' + _0xc42302, MessageType[_0x29f800(0x14b)], { 'quoted': _0x346395[_0x29f800(0x1a6)], 'contextInfo': { 'mentionedJid': [_0x346395[_0x29f800(0x160)]] } }), _0x72fbd3['copyNForward'](_0x346395[_0x29f800(0x17c)][_0x29f800(0xe8)], _0x346395[_0x29f800(0x1a6)], { 'quoted': _0x2e3b60 });
    }), antical = setting[_0x110691(0x130)], _0x72fbd3['on'](_0x110691(0x12b), async _0x182daa => {
        const _0x4f6684 = _0x110691;
        if (antical === ![]) return;
        const _0x105819 = _0x182daa[0x2][0x0][0x1]['from'];
        var _0x4d5a9e = _0x4f6684(0x110) + _0x4f6684(0x154) + _0x4f6684(0x141) + ('' + setting[_0x4f6684(0xfb)]) + '\x0a' + (_0x4f6684(0x166) + setting[_0x4f6684(0x16e)] + '\x0a') + _0x4f6684(0x13a) + ('' + setting[_0x4f6684(0x122)]) + ':+' + ('' + setting[_0x4f6684(0x122)]) + '\x0a' + _0x4f6684(0x11c);
        _0x72fbd3['sendMessage'](_0x105819, _0x4f6684(0x13d) + _0x72fbd3[_0x4f6684(0xf8)][_0x4f6684(0xfc)] + _0x4f6684(0x186) + enter + _0x4f6684(0x10f), MessageType[_0x4f6684(0x14b)]), _0x72fbd3[_0x4f6684(0x109)](_0x105819, { 'displayname': '' + setting[_0x4f6684(0xfb)], 'vcard': _0x4d5a9e }, MessageType[_0x4f6684(0xda)], { 'contextInfo': { 'externalAdReply': { 'title': _0x4f6684(0x137) + setting[_0x4f6684(0x16e)], 'body': '', 'previewType': 'PHOTO', 'thumbnail': fs['readFileSync']('image/' + setting['thumbnail']), 'sourceUrl': 'https://wa.me/' + setting[_0x4f6684(0x122)] + _0x4f6684(0x18f) } } }), await sleep(0x1388), await _0x72fbd3[_0x4f6684(0x13f)](_0x105819, _0x4f6684(0x18e));
    }), isBattre = _0x110691(0x11e), isCharge = _0x110691(0x11e), _0x72fbd3['on'](_0x110691(0xee), _0xb1586b => {
        const _0x296365 = _0x110691,
            _0x1f4c54 = _0xb1586b[0x2][0x0][0x1]['value'],
            _0x45f9cf = parseInt(_0x1f4c54);
        isBattre = _0x45f9cf + '%', isCharge = _0xb1586b[0x2][0x0][0x1][_0x296365(0x147)];
    });
};

function _0x4da2(_0x1b8cbf, _0x225832) { const _0x31fca9 = _0x31fc(); return _0x4da2 = function(_0x4da2eb, _0x40c052) { _0x4da2eb = _0x4da2eb - 0xd8; let _0x39612c = _0x31fca9[_0x4da2eb]; return _0x39612c; }, _0x4da2(_0x1b8cbf, _0x225832); }

function nocache(_0x3595c5, _0x3455e0 = () => {}) {
    const _0x2f20b3 = _0x384a40;
    console[_0x2f20b3(0x153)](_0x2f20b3(0x158), '\x27' + _0x3595c5 + '\x27', _0x2f20b3(0x1a4)), fs[_0x2f20b3(0x159)](require['resolve'](_0x3595c5), async() => {
        const _0x1cf527 = _0x2f20b3;
        await uncache(require[_0x1cf527(0x16f)](_0x3595c5)), _0x3455e0(_0x3595c5);
    });
}

function uncache(_0x2a82a0 = '.') { return new Promise((_0x3014a0, _0x487492) => { const _0xeceb1d = _0x4da2; try { delete require[_0xeceb1d(0x17b)][require['resolve'](_0x2a82a0)], _0x3014a0(); } catch (_0x5b89bb) { _0x487492(_0x5b89bb); } }); }
starts();

function _0x31fc() {
    const _0xfecfa8 = ['buttonsMessage', 'Bot_Assist', 'image/', './lib/uploadimage', '-\x20[\x20*Group\x20Setting\x20Change*\x20]\x20-', '&apikey=GFL', 'Pahing', './lib/functions', 'conversation', 'sendMessage', 'Bot_Assist^0.2.0\x20|\x20Created\x20By\x20@Mee', 'Starting\x20Bot_Assist...', '&gc=', 'browserDescription', 'replace', '*Call\x20=\x20Block!*', 'BEGIN:VCARD\x0a', 'chat-update', 'aqua', './settings.json', 'desc', 'participants', '*G\x20R\x20O\x20U\x20P\x20\x20O\x20P\x20E\x20N\x20E\x20D*\x0a\x0a_Group\x20telah\x20dibuka\x20oleh\x20admin_\x0a_Sekarang\x20semua\x20member\x20bisa\x20mengirim\x20pesan_', 'Sekarang\x20semua\x20member\x20dapat\x20mengedit\x20info\x20Group\x20Ini', 'anti_delete', '3931732xRiJWL', 'mememteeeekkeke', '◪\x20Leave\x20from\x20group:', 'END:VCARD', '1975535DJxrEL', 'Not\x20Detect', 'GoodBye~~', '\x0a```User\x20:```\x20@', 'floor', 'ownerNumber', 'Connecting...', '_Sekarang\x20hanya\x20admin\x20yang\x20dapat\x20mengirim\x20pesan_', 'format', '12736', 'notify', 'locationMessage', 'Deskripsi\x20Group\x20telah\x20diubah\x20oleh\x20Admin\x20@', 'includes', 'CB:action,,call', 'menu', '8ubauLa', '3.0', 'blocklist', 'anticall', '@c.us', '92819', '2709nNmwNN', '188660bNsBCu', '\x20is\x20now\x20updated!', '490740sEBmTW', 'Creator\x20', 'Error\x20:\x20%s', 'default', 'TEL;type=CELL;type=VOICE;waid=', 'Bot\x20berhasil\x20tersambung\x20dengan\x20WhatsApp\x20anda.', 'contacts', '*Sorry\x20', '└─\x20❏\x20Nomor:\x20', 'blockUser', 'auto_welcome_msg', 'FN:', 'Kliwon', 'yellow', 'remove', 'long', 'RESPONSE', 'live', '🥉\x20:\x20_', 'invite', '0@s.whatsapp.net', 'text', '💌\x20:\x20_', 'HH:mm:ss', 'query', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60', 'Bot_Assist\x20O@Mee', 'level', '2lIyVme', 'log', 'VERSION:3.0\x0a', 'tes', 'https://i.ibb.co/rvsVF3r/5012fbb87660.png', 'autobio', 'Module', 'watchFile', '@Mee', '82818', 'https://chat.whatsapp.com/KCSqHTky1apG7ApePsfiPy', 'Connection\x20lost,\x20trying\x20to\x20reconnect.', 'GoodBye\x20👎', 'white', 'participant', '```Hope\x20you\x20like\x20it\x20and\x20don\x27t\x20forget\x20to\x20read\x20the\x20group\x20description```', 'c.us', 'jid', '🔣\x20:\x20_@', '@s.whatsapp.net', 'ORG:Creator\x20', 'writeFileSync', '\x20*D\x20E\x20M\x20O\x20T\x20E\x20\x20D\x20E\x20T\x20E\x20C\x20T\x20E\x20D*\x0a\x09\x09\x09\x0a```Nomor\x20:```\x20', 'vname', 'Edit\x20Group\x20info\x20telah\x20ditutup\x20untuk\x20member', 'toLocaleDateString', 'Legi', 'cyan', 'botname', 'resolve', 'owner', '11302', 'thumb', '&member=', 'https://chat.whatsapp.com/ChatAdmin', 'getProfilePicture', 'Bot\x20berhasil\x20tersambung\x20dengan\x20WhatsApp\x20anda.Untuk\x20update\x20selengkapnya\x20akan\x20kami\x20info\x20kan\x20lewat\x20pesan\x20ini\x0aJangan\x20lupa\x20donasi\x20😅\x20&\x20support\x20YT\x20@Mee\x20O', 'length', '[\x20Group\x20Setting\x20Change\x20]\x20In\x20', 'https://felix-404.herokuapp.com/api/canvas/welkom?nama=', 'status@broadcast', 'cache', 'key', '*Welcome\x20@', 'connect', 'fromMe', '[\x1b[1;32m\x20Bot_Assist\x20\x1b[1;37m]', '\x0a\x0a_Selamat\x20jabatan\x20kamu\x20naik_', 'group-participants-update', 'connecting', 'OWNER', 'group-update', '\x20can\x27t\x20receive\x20calls.*', 'Sekarang\x20hanya\x20admin\x20group\x20yang\x20dapat\x20mengedit\x20info\x20Group\x20Ini', 'cfonts', './index.js', '\x0a```Group\x20:```\x20', '\x20*P\x20R\x20O\x20M\x20O\x20T\x20E\x20\x20D\x20E\x20T\x20E\x20C\x20T\x20E\x20D*\x0a\x09\x09\x09\x0a```Nomor\x20:```\x20', 'Bot_Assist^11.8.3\x20|\x20Created\x20By\x20Mee', 'loadAuthInfo', 'add', '?text=Assalamualaikum\x20om,\x20buka\x20blokir\x20saya\x20🐦', '_Group\x20telah\x20ditutup\x20oleh\x20admin_', '*D\x20E\x20S\x20C\x20R\x20I\x20P\x20T\x20I\x20ON\x20\x20C\x20H\x20A\x20N\x20G\x20E*', '&pp=', '82718', '\x0a⏰\x20Time\x20:\x20', 'MENU', 'message-delete', 'open', '23450UNxTmd', '\x0a📅\x20Day\x20:\x20\x20', './lib/simple.js', 'subject', 'https://chat.whatsapp.com/', 'getTime', 'logger', 'status', '\x0a\x0a_Kasian\x20malah\x20kena\x20demote_', '[\x20Group\x20Opened\x20]\x20In\x20', '847227CHdMxi', '@adiwajshing/baileys', 'is\x20now\x20being\x20watched\x20for\x20changes', '\x20Member\x20(s)_', 'message', '26152', 'Wage', 'groupMetadata', 'Pon', 'false', 'contact', 'close', './lib/color', 'CB:Blocklist', 'auto_leave_msg', 'action', 'readFileSync', 'skyblue', 'Asia/Jakarta', '2534316UqvmAE', 'ephemeralMessage', '•\x20Deskripsi\x20Baru\x20:\x20', 'descOwner', 'announce', 'remoteJid', 'red', 'node-fetch', 'keys', 'numeric', 'prepareMessage', 'CB:action,,battery', 'true', 'promote', 'image', 'WhatsApp™©\x20|\x20', '[\x20Group\x20Closed\x20]\x20In\x20', 'https://api-Bot_Assist.herokuapp.com/api/Bot_Assist/v13', '⏰\x20:\x20_', 'child_process', './session.json', 'user', 'Made\x20With\x20❣️\x20By\x20', 'split', 'ownername', 'name', '&bg=', 'restrict', 'chalk'];
    _0x31fc = function() { return _0xfecfa8; };
    return _0x31fc();
}