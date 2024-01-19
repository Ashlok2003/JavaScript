/*
! What is WebRTC ?

*   WebRTC is a set of javascript API's that allows us to establish peer to peer
*   connection between two browsers to exchange deata such as audio & video in real time. :)
*   WebRTC tranports its data over UDP, UDP is fast as compare to WebSockets but it has latency.
*   It don't have build in signaling. We have to use ICE-Servers

? So what exactly send between the two clients and how it is sent ?

!   SDP's : A session description protocol (SDP), is an obect containing information about the session
!           connection such as the codec, addresses, media type, audio and video and so on.

*   ICE candidates : An ICE candidates is a public IP addresses and port that could potentially be an 
*                       address that receives data.

//! Multi-layer connection methods.

! Mesh = Mesh can refer to a network topology where devices are interconnected, forming a mesh-like structure.

* MCU = "Multipoint Control Unit" in the context of video conferencing or multimedia communication. 
*           An MCU is a device that bridges multiple video and audio streams into a single conference.

? SFU = "Selective Forwarding Unit" in the context of real-time communication systems. 
?        An SFU is a device that receives media streams from participants in a conference and decides 
?        which streams to forward to other participants.
*/